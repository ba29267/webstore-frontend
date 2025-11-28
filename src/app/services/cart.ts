import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CART_KEY = 'cart';

  constructor() {}

  getCart() {
    const stored = localStorage.getItem(this.CART_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  saveCart(cart: any[]) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  addItem(product: any) {
    const cart = this.getCart();
    const existing = cart.find((item: { id: any; }) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    this.saveCart(cart);
  }

  updateQuantity(productId: number, qty: number) {
    const cart = this.getCart();
    const item = cart.find((i: { id: number; }) => i.id === productId);
    if (item) {
      item.quantity = qty;
      if (item.quantity <= 0) {
        this.removeItem(productId);
        return;
      }
    }
    this.saveCart(cart);
  }

  removeItem(productId: number) {
    const newCart = this.getCart().filter((i: { id: number; }) => i.id !== productId);
    this.saveCart(newCart);
  }

  clearCart() {
    localStorage.removeItem(this.CART_KEY);
  }
}
