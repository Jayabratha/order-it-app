import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FoodItem } from '../shared/models/food-item.model';
import { OrderService } from '../shared/services/order.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit, OnDestroy {

  constructor(private orderService: OrderService) { }

  @Input() item: FoodItem;

  count: number = 0;
  private onDestroy$ = new Subject();

  ngOnInit() {
    this.orderService.getOrderList()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((orderList) => {
      let item = orderList.find(orderItem => orderItem.item.id === this.item.id);

      if (item) {
        this.count = item.quantity;
      } else {
        this.count = 0;
      }
    })
  }

  addItem(item) {
    this.orderService.addItem(item);
  }

  removeItem(item) {
    this.orderService.removeItem(item);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
