public with sharing class PersonalRelatedListBCController 
{
   @AuraEnabled(Cacheable = true)
   public static List<ObjectB__c> getRecordsObjectsB()
   {
       return PersonalRelatedListBCSelector.getRecordsObjectsB();
   }

   @AuraEnabled(Cacheable = true)
   public static List<ObjectC__c> getRecordsObjectsC()
   {
        return PersonalRelatedListBCSelector.getRecordsObjectsC();
   }
}
