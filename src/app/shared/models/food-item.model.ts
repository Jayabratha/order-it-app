import { FoodType } from "./food-type.enum";

export interface FoodItem {
    id: number,
    name: string,
    price: number,
    type: FoodType
}