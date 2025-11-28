import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  filtered: any[] = [];

  search = '';
  category = '';

  categories: string[] = ['electronics', 'clothes', 'books', 'other'];

  loading = true;
  error = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('ProductListComponent initialized');
    this.load();
  }

  load() {
    console.log('Loading products...');
    this.loading = true;
    this.error = '';
    
    this.productService.getAll().subscribe({
      next: (res) => {
        console.log('Products loaded:', res);
        console.log('Setting loading to false');
        this.products = res || [];
        this.filtered = res || [];
        this.loading = false;
        this.cdr.detectChanges(); // Force change detection
        console.log('Loading state:', this.loading);
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.error = err.message || 'Failed to load products';
        this.loading = false;
        this.cdr.detectChanges(); // Force change detection
        console.log('Loading state after error:', this.loading);
      },
      complete: () => {
        console.log('Observable completed');
      }
    });
  }

  applyFilters() {
    this.filtered = this.products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(this.search.toLowerCase()) ||
                           (p.description && p.description.toLowerCase().includes(this.search.toLowerCase()));
      
      // Check if category matches - note that Category might be null or an object
      const matchesCategory = this.category === '' || 
                             (p.Category && p.Category.name === this.category) ||
                             (p.category === this.category); // fallback for flat structure
      
      return matchesSearch && matchesCategory;
    });
  }

  addToCart() {
  this.cartService.addItem(this.products.find(p => p.id === p.id));
  alert('Added to cart!');
}
}