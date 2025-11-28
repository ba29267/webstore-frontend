import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  changeQty(id: number, qty: number) {
    this.cartService.updateQuantity(id, qty);
    this.loadCart();
  }

  remove(id: number) {
    this.cartService.removeItem(id);
    this.loadCart();
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
