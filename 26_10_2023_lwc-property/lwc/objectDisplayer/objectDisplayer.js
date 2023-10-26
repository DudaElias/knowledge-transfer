import { LightningElement, api, track } from 'lwc';
import getLeads from '@salesforce/apex/LeadController.getLeads';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ObjectDisplayer extends LightningElement {

    @api object;
    @track data = [];
    columns;

    connectedCallback() {
        switch (this.object) {
            case 'Lead':
                this.retrieveLeads();
                break;
            case 'Opportunity':
                this.retrieveOpportunities();
                break;
            case 'Account':
                this.retrieveAccounts();
                break;
            case 'Contact':
                this.retrieveContacts();
                break;
            default:
                break;
        }
    }

    retrieveLeads(){
        getLeads()
        .then((result) => {
            if(result){
                this.data = result;

                this.columns = [
                    { label: 'Name', fieldName: 'Name' },
                    { label: 'Title', fieldName: 'Title' },
                    { label: 'Company', fieldName: 'Company' },
                    { label: 'Status', fieldName: 'Status' },
                ];
            }
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    retrieveOpportunities(){
        getOpportunities()
        .then((result) => {
            if(result){
                this.data = result;

                this.columns = [
                    { label: 'Name', fieldName: 'Name' },
                    { label: 'Stage Name', fieldName: 'StageName' },
                    { label: 'Amount', fieldName: 'Amount', type: 'currency' },
                    { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
                ];
            }
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    retrieveAccounts(){
        getAccounts()
        .then((result) => {
            if(result){
                this.data = result;

                this.columns = [
                    { label: 'Name', fieldName: 'Name' },
                    { label: 'Industry', fieldName: 'Industry' },
                    { label: 'Billing Postal Code', fieldName: 'BillingPostalCode' },
                    { label: 'Billing Street', fieldName: 'BillingStreet' },
                ];
            }
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    retrieveContacts(){
        getContacts()
        .then((result) => {
            if(result){
                this.data = result;

                this.columns = [
                    { label: 'Name', fieldName: 'Name' },
                    { label: 'Email', fieldName: 'Email', type: 'email' },
                    { label: 'Mobile Phone', fieldName: 'MobilePhone', type: 'phone' },
                    { label: 'Account', fieldName: 'Account.Name' },
                ];
            }
        })
        .catch((error) => {
            alert(error.message);
        })
    }

}