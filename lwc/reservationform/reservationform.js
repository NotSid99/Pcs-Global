import addnewreservation from '@salesforce/apex/LWCapex.addnewreservation';
import Date from '@salesforce/schema/Reservation__c.Date__c';
import Email from '@salesforce/schema/Reservation__c.Email__c';
import Name from '@salesforce/schema/Reservation__c.Name__c';
import PartySize from '@salesforce/schema/Reservation__c.Party_size__c';
import Phone from '@salesforce/schema/Reservation__c.Phone__c';
// import Time from '@salesforce/schema/Reservation__c.Time__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { LightningElement, track } from 'lwc';



export default class Reservationform extends LightningElement {
    @track resDetails={
        name:Name,
        email:Email,
        phone:Phone,
        // time:Time,
        date:Date,
        party:PartySize

    };
    NameHandler(event){
        this.resDetails.name=event.target.value;
        console.log('Name',this.resDetails.name);
    }
    EmailHandler(event){
        this.resDetails.email=event.target.value;
        console.log('Email',this.resDetails.email);
    }
    PhoneHandler(event){
        this.resDetails.phone=event.target.value;
        console.log('Phone',this.resDetails.phone);
    }
    DateHandler(event){
        this.resDetails.date=event.target.value;
        console.log('Date',this.resDetails.date);
    }
    // TimeHandler(event){
    //     this.resDetails.time=event.target.value;
    //     console.log('Time',this.resDetails.time);
    // }
    PartyHandler(event){
        this.resDetails.party=event.target.value;
        console.log('Party',this.resDetails.party);
    }
    handleclick(){
        console.log(this.resDetails.name);
        console.log(this.resDetails.email);
        console.log(this.resDetails.phone);
        console.log(this.resDetails.date);
        // console.log(this.resDetails.time);
        console.log(this.resDetails.party);
        addnewreservation({
            resName:this.resDetails.name,
            resEmail:this.resDetails.email,
            resPhone:this.resDetails.phone,
            resDate:this.resDetails.date,
            // resTime:this.resDetails.time,
            resParty:this.resDetails.party
        })
        
        .then(_result=>{ console.log('sssssssssss');
            const event = new ShowToastEvent({
                title:'Reservation Made',
                message:'New Resermation from '+this.resDetails.name,
                variant:'success'
            });
            this.dispatchEvent(event);

        })  
        .catch(_error=>{console.log('error',JSON.stringify(_error));
            const event = new ShowToastEvent({
                title:'Error ',
                message:'Error while creating reservation.Please Contact System Admin',
                variant:'error'
                
                
            });
            this.dispatchEvent(event);

    });

    }
}