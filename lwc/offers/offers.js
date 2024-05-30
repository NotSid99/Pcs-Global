// offerPage.js
import { LightningElement, track } from 'lwc';

export default class OfferPage extends LightningElement {
    @track offers = [
        { id: 1, title: 'Free Coke on Wednesdays', description: 'Get a free Coke with every meal on Wednesdays!', validity: 'Valid only on Wednesdays', imageSrc: 'https://images.pexels.com/photos/17780573/pexels-photo-17780573/free-photo-of-vintage-bottles-of-coca-cola.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 2, title: '50% Off on Pizza Combo', description: 'Order a pizza combo and get 50% off on your total bill!', validity: 'Valid until end of the month', imageSrc: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 3, title: '30% Off on Orders above RS.500', description: 'Order above Rs.500 and get 30% off on your total bill!', validity: 'Valid on Saturdays', imageSrc: 'https://images.pexels.com/photos/8535717/pexels-photo-8535717.jpeg?auto=compress&cs=tinysrgb&w=600' },
       
    ];
}
