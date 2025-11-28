import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-order-detail-component',
  imports: [FormsModule],
  templateUrl: './admin-order-detail-component.html',
  styleUrl: './admin-order-detail-component.css',
})
export class AdminOrderDetailComponent implements OnInit {

  order: any = null;
  id: number;

  statuses = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled"
  ];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.orderService.getById(this.id).subscribe(res => {
      this.order = res;
    });
  }

  updateStatus() {
    this.orderService.updateStatus(this.id, this.order.status)
      .subscribe(() => {
        alert("Status updated!");
      });
  }
}