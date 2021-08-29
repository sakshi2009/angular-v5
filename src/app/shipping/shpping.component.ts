import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shpping',
  templateUrl: './shpping.component.html',
  styleUrls: ['./shpping.component.css']
})
export class ShppingComponent implements OnInit {
  shippingCosts = this.cartService.getShippingPrices();
  constructor(private cartService: CartService){}
  ngOnInit() {
  }

}