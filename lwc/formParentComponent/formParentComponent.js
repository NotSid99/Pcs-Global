import { LightningElement } from 'lwc';

export default class FormParentComponent extends LightningElement {

 firstName='';
 lastName='';
 email='';
 
 handleEvent(event)
{
    this.firstName=event.detail.FirstName;
    this.lastName=event.detail.LastName;
    this.email=event.detail.Email;
}
}