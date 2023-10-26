public with sharing class ContactController {
    
    @AuraEnabled
    public static List<Contact> getContacts() {
        return [SELECT Id, Name, Email, MobilePhone, Account.Name FROM Contact LIMIT 20];
    }

}