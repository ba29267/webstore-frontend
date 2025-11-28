import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders: any[] = [];
  loading = true;

  constructor(
    private orderService: OrderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getMyOrders().subscribe({
      next: (res) => {
        this.orders = res;
        this.loading = false;
        this.cdr.detectChanges();
        console.log('Orders loaded:', this.orders);
      },
      error: (err) => {
        console.error('Error loading orders:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}