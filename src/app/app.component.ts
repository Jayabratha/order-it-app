import { Component } from '@angular/core';
import { OrderService } from './shared/services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'order-it-app';
  confirm: boolean = false;
  orderPrice: number = 0;
  showMenu: boolean = false;
  showCart: boolean = false;

  constructor(private orderService: OrderService) {}

  confirmOrder(confirm) {
    this.showCart = false;
    this.confirm = confirm;
  }

  updateOrder(price) {
    this.orderPrice = price;
  }

  reset() {
    this.confirm = false;
    this.orderService.reset();
  }
  toggleMenu(showMenu) {
    this.showMenu = !showMenu;
  }

  toggleCart(showCart) {
    this.showCart = !showCart;
  }

}
