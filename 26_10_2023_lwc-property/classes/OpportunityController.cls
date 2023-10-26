public with sharing class OpportunityController {
    
    @AuraEnabled
    public static List<Opportunity> getOpportunities() {
        return [SELECT Id, Name, StageName, Amount, CloseDate FROM Opportunity LIMIT 20];
    }

}