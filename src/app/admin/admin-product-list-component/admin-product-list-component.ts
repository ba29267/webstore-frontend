import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../services/product';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-product-list-component',
  imports: [CommonModule],
  templateUrl: './admin-product-list-component.html',
  styleUrl: './admin-product-list-component.css',
})
export class AdminProductListComponent implements OnInit {

  products: any[] = [];
  loading = true;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef  // ← ADD THIS
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (res) => {
        this.products = res;
        this.loading = false;
        this.cdr.detectChanges();  // ← ADD THIS
        console.log('Products loaded:', this.products);  // ← ADD THIS for debugging
      },
      error: (err) => {  // ← ADD ERROR HANDLING
        console.error('Error loading products:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  delete(id: number) {
    if (!confirm("Delete product?")) return;

    this.productService.delete(id).subscribe({
      next: () => {
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error deleting product:', err);
        alert('Failed to delete product');
      }
    });
  }

  edit(id: number) {
    this.router.navigate(['/admin/products/edit', id]);
  }

  create() {
    this.router.navigate(['/admin/products/create']);
  }

  discount(id: number) {
    this.router.navigate(['/admin/products', id, 'discount']);
  }
}