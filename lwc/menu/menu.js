// dishdashPage.js
import { LightningElement, track } from 'lwc';

export default class DishdashPage extends LightningElement {
    @track dishes = [
        { id: '1', name: 'Dish 1', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600/to/image1.jpg', price: 10 },
        { id: '2', name: 'Dish 2', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 12 },
        // Add more dishes here
    ];

    @track cart = [];
    @track total = 0;

    addToCart(dish) {
        this.cart.push(dish);
        this.total += dish.price;
    }

    generateBill() {
        // Implement logic to generate bill (e.g., displaying bill in a modal)
        // You can use this.cart array to get the items in the cart and this.total for the total price
        // For simplicity, let's just log the bill to the console for now
        console.log("Bill Generated:");
        console.log("Items:");
        this.cart.forEach(item => {
            console.log(`${item.name} - $${item.price}`);
        });
        console.log(`Total: $${this.total}`);
    }
}
