import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { OrderItem } from '../shared/models/order-item.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private orderService: OrderService) { }

  @Output() update: EventEmitter<number> = new EventEmitter();
  @Output() confirm: EventEmitter<boolean> = new EventEmitter();

  orderList: OrderItem[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;

  private onDestroy$ = new Subject();

  ngOnInit() {
    this.orderService.getOrderList()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((orderList) => {
        this.orderList = orderList;
        this.totalItems = this.orderList.reduce((totalItems, oItem) => totalItems + oItem.quantity, 0);
        this.totalPrice = this.orderList.reduce((totalPrice, oItem) => totalPrice + (oItem.quantity * oItem.item.price), 0);
        this.update.emit(this.totalPrice);
    });
  }

  placeOrder() {
    this.confirm.emit(true);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
