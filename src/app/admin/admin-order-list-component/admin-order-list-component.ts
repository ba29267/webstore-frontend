import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrderService } from '../../services/order';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-order-list-component',
  imports: [CommonModule, DatePipe, FormsModule],  
  templateUrl: './admin-order-list-component.html',
  styleUrl: './admin-order-list-component.css',
})
export class AdminOrderListComponent implements OnInit {

  orders: any[] = [];
  loading = true;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.orderService.getAll().subscribe({
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

  openOrder(id: number) {
    this.router.navigate(['/admin/orders', id]);
  }
}