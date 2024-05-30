import { NavigationMixin } from 'lightning/navigation';
import { LightningElement } from 'lwc';

export default class RestaurantListing extends NavigationMixin(LightningElement) {
    handleReservationClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__reservationformAura'
            }
        });
    }
}