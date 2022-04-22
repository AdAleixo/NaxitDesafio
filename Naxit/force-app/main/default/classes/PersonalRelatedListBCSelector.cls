public with sharing class PersonalRelatedListBCSelector 
{
   
   public static List<ObjectB__c> getRecordsObjectsB()
   {
    
    return [SELECT Id,Name,ObjectA__r.Name FROM ObjectB__c];

   }

   public static List<ObjectC__c> getRecordsObjectsC()
   {
       return [SELECT Id,Name,ObjectB__r.Name FROM ObjectC__c];
   }
}
