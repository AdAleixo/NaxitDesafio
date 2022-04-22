@IsTest
public with sharing class PersonalRelatedListBCControllerTest 
{
  @TestSetup
  static void makeData()
  {
      ObjectA__c objA = new ObjectA__c();
      ObjectB__c objB = new ObjectB__c();
      ObjectC__c objC = new ObjectC__c();

      objA.Name = 'TestA';
      objB.Name = 'TestB';
      objC.Name = 'TestC';
      insert objA;

      objB.ObjectA__c = objA.ID;
      insert objB;

      objC.ObjectB__c = objB.ID;
      insert objC;
  }

  @IsTest
  public static void getRecordsObjectsBTest()
  {
    test.startTest();
    List<ObjectB__c> lstTestObjectB =  PersonalRelatedListBCController.getRecordsObjectsB();
    System.assertEquals(false,lstTestObjectB.isEmpty() , 'List should not be empty');
    test.stopTest();
  }
  @IsTest
  public static void getRecordsObjectsCTest()
  {
    test.startTest();
    List<ObjectC__c> lstTestObjectC =  PersonalRelatedListBCController.getRecordsObjectsC();
    System.assertEquals(false,lstTestObjectC.isEmpty() , 'List should not be empty');
    test.stopTest();
  }

}
