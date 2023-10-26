public with sharing class LeadController {
    
    @AuraEnabled
    public static List<Lead> getLeads() {
        return [SELECT Id, Name, Title, Company, Status FROM Lead LIMIT 20];
    }

}