// multiCuisineDishes.js
import { LightningElement } from 'lwc';

export default class MultiCuisineDishes extends LightningElement {
    southIndianDishes = [
        { id: 1, name: 'Dosa', description: 'Thin crepe made of fermented rice and lentil batter' },
        { id: 2, name: 'Idli', description: 'Steamed cake made of fermented rice and lentil batter' },
       
    ];

    indianDishes = [
        { id: 1, name: 'Butter Chicken', description: 'Chicken cooked in a creamy tomato-based sauce' },
        { id: 2, name: 'Biryani', description: 'Fragrant rice dish cooked with spices and meat or vegetables' },
       
    ];

    italianDishes = [
        { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil' },
        { id: 2, name: 'Pasta Carbonara', description: 'Pasta dish with eggs, cheese, pancetta, and black pepper' },
      
    ];
}
