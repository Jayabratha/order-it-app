import { FoodItem } from "./food-item.model";

export interface CategoryMenu {
    categoryName: string,
    list: Array<FoodItem>
}