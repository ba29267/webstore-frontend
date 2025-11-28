import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-component.component.html',
  styleUrls: ['./checkout-component.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: any[] = [];
  total = 0;

  client = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  submit() {
    if (this.cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderPayload = {
      client: this.client,
      items: this.cart.map(item => ({
        productId: item.id,
        quantity: item.quantity
      }))
    };

    this.orderService.createOrder(orderPayload).subscribe({
      next: () => {
        alert("Order placed successfully!");
        this.cartService.clearCart();
        this.router.navigate(['/my-orders']);
      },
      error: (err) => {
        console.error(err);
        alert("Failed to place order");
      }
    });
  }
}
