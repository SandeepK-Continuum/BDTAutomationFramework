package continuum.cucumber;




import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import org.apache.poi.ss.formula.functions.Column;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.runners.model.TestClass;
import org.testng.Reporter;



public class Utilities {
	
	public static String  getMavenProperties(String key){
	
	 Properties mavenProps = new Properties();
	 InputStream inStream = TestClass.class.getResourceAsStream("/maven.properties");
	 try {
		mavenProps.load(inStream);
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}

	return mavenProps.getProperty(key);
	}
	
	
	
	public static List<String> readValidationsFromExcelFile(String excelFileName,String SheetName, String TestCaseID) throws IOException {
		 String excelFilePath = new File("").getAbsolutePath()+"\\src\\test\\resources\\Data\\"+excelFileName;
		List<String> validations =new ArrayList<String>();
		try{
	    FileInputStream inputStream = new FileInputStream(new File(excelFilePath));
	 
	    XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
	    Sheet firstSheet = workbook.getSheet(SheetName);
	    System.out.println("workbook created "+workbook);
	    Iterator<Row> iterator = firstSheet.iterator();
	 
	    while (iterator.hasNext()) 
	     {
	        Row nextRow = iterator.next();
	        Iterator<Cell> cellIterator = nextRow.cellIterator();
	        Cell tCId= nextRow.getCell(1);
	        System.out.println("Test case id"+tCId);
	         String testCaseno= String.valueOf(getCellValue(tCId));
	         if(testCaseno.contains(TestCaseID))
	         {
	           while (cellIterator.hasNext()) {
	                Cell nextCell = cellIterator.next();
	                int columnIndex = nextCell.getColumnIndex();
	                validations.set(columnIndex,String.valueOf(getCellValue(nextCell)));
	                System.out.print("Validations Point"+validations.get(columnIndex));
	                }
	          }
	 
	      }
	    
	    workbook.close();
	    inputStream.close();
		 }catch (Exception e)
	    {
	    	System.out.println("Not able to read data from Excelsheet at  "+excelFilePath);
	    	Reporter.log("Not able to read data from Excelsheet at  "+excelFilePath);
	    	e.printStackTrace();
	    }
	    return validations;
	}

	private static Object getCellValue(Cell cell) {
	    switch (cell.getCellType()) {
	    case Cell.CELL_TYPE_STRING:
	        return cell.getStringCellValue();
	 
	    case Cell.CELL_TYPE_BOOLEAN:
	        return cell.getBooleanCellValue();
	 
	    case Cell.CELL_TYPE_NUMERIC:
	        return cell.getNumericCellValue();
	    }
	 
	    return null;
	}
	public static List<String> readValidationsFromExcelFile(String excelFileName, String TestCaseID) {
		 String excelFilePath = new File("").getAbsolutePath()+"\\src\\test\\resources\\Data\\"+excelFileName;
		List<String> validations =new ArrayList<String>();
	    try{
		FileInputStream inputStream = new FileInputStream(new File(excelFilePath));
	 
		XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
		  // System.out.println("workbook created "+workbook);
	    Sheet firstSheet = workbook.getSheetAt(0);
	    Iterator<Row> iterator = firstSheet.iterator();
	 
	    while (iterator.hasNext()) 
	     {
	        Row nextRow = iterator.next();
	        Iterator<Cell> cellIterator = nextRow.cellIterator();
	        Cell tCId= nextRow.getCell(0);
	       
	         String testCaseno= String.valueOf(getCellValue(tCId));
	       
	         if(testCaseno.contains(TestCaseID))
	         {
	        	
	          }
	 
	      }
	    
	    workbook.close();
	    inputStream.close();
	    }catch (Exception e)
	    {
	    	System.out.println("Not able to connect Excelsheet at  "+excelFilePath);
	    	e.printStackTrace();
	    }
	    return validations;
	}
	
}

