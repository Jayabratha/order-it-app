import { Component, OnInit, Input } from '@angular/core';
import { CategoryMenu } from '../shared/models/category-menu.model';
import { MENU } from '../shared/mock-menu';

@Component({
  selector: 'order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss']
})
export class OrderMenuComponent implements OnInit {

  constructor() { }

  menu: Array<CategoryMenu> = MENU;

  ngOnInit() {
  }

}
