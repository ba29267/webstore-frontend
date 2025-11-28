import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-order-detail-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-order-detail-component.html',
  styleUrl: './admin-order-detail-component.css',
})
export class AdminOrderDetailComponent implements OnInit {

  order: any = null;
  id: number;
  loading = true;
  updating = false;

  statuses = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled"
  ];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private cdr: ChangeDetectorRef
  ) {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.orderService.getById(this.id).subscribe({
      next: (res) => {
        this.order = res;
        this.loading = false;
        this.cdr.detectChanges();
        console.log('Order loaded:', this.order);
      },
      error: (err) => {
        console.error('Error loading order:', err);
        alert('Failed to load order');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  updateStatus() {
    this.updating = true;
    this.orderService.updateStatus(this.id, this.order.status).subscribe({
      next: () => {
        alert("Status updated!");
        this.updating = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error updating status:', err);
        alert('Failed to update status');
        this.updating = false;
        this.cdr.detectChanges();
      }
    });
  }
}