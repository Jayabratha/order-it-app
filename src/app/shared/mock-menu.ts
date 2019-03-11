import { CategoryMenu } from "./models/category-menu.model";
import { FoodType } from "./models/food-type.enum";

export const MENU: Array<CategoryMenu> = [
    { 
        categoryName: 'Appetizers', 
        list: [            
            {id: 1, name: 'Veg Pakoda', price: 100, type: FoodType.VEG},           
            {id: 2, name: 'Chicken Pakoda', price: 150, type: FoodType.NONVEG},
            {id: 3, name: 'Fish n Chips', price: 220, type: FoodType.NONVEG}           
        ]
    },
    { 
        categoryName: 'Main Course', 
        list: [            
            {id: 4, name: 'Veg Biryani', price: 190, type: FoodType.VEG},           
            {id: 5, name: 'Chicken Biryani', price: 220, type: FoodType.NONVEG},
            {id: 6, name: 'Mutton Biryani', price: 290, type: FoodType.NONVEG}           
        ]
    }
]
