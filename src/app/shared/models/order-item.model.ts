import { FoodItem } from "./food-item.model";

export interface OrderItem {
    item: FoodItem
    quantity: number
}