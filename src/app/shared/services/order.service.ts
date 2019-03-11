import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderItem } from '../models/order-item.model';
import { FoodItem } from '../models/food-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  orderList: BehaviorSubject<Array<OrderItem>> = new BehaviorSubject([]);

  getOrderList() {
    return this.orderList.asObservable();
  }

  reset() {
    this.orderList.next([]);
  }

  addItem(item: FoodItem) {
    let currentList = this.orderList.getValue();
    let updatedList = [...currentList];
    let matchedItem;

    for (let orderItem of updatedList) {
      if (orderItem.item.id === item.id) {
        orderItem.quantity++;
        matchedItem = item;
        break;
      }
    }

    if (!matchedItem) {
      updatedList.push({
        item: item,
        quantity: 1
      });
    }

    this.orderList.next(updatedList);

  }

  removeItem(item) {
    let currentList = this.orderList.getValue();
    let updatedList = [...currentList];

    for (let i = 0; i < updatedList.length; i++) {
      let orderItem = updatedList[i];
      if (orderItem.item.id === item.id) {
        if (orderItem.quantity > 1) {
          orderItem.quantity--;
        } else {
          updatedList.splice(i, 1);
        }
        
        break;
      }
    }

    console.log(updatedList);
    this.orderList.next(updatedList);
  }
}
