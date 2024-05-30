
import { LightningElement, track } from 'lwc';

export default class ListChildComponent extends LightningElement {
    @track firstName;
    @track lastName;
    @track email;
    connectedCallback()
    {
        this.firstName = '';
        this.lastName = '';
        this.Email='';
    }
    handleChangeFirstName(event){
        this.firstName=event.target.value;
    }

    handleChangeLastName(event){
        this.lastName=event.target.value;
    }
    handleChangeEmail(event){
        this.email=event.target.value;

    }
    handleClick(event){
        const searchEvent=new CustomEvent('getsearchevent',
         {detail :
            {
                FirstName:this.firstName,
                LastName:this.lastName,
                Email:this.email
            }
        
        
        });
        this.dispatchEvent(searchEvent);
    }
}