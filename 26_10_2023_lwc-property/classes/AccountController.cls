public with sharing class AccountController {
    
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Industry, BillingPostalCode, BillingStreet FROM Account LIMIT 20];
    }

}