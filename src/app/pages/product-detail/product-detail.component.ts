import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {

  product: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadProduct(id);
    }
  }

  loadProduct(id: number) {
    this.productService.getById(id).subscribe({
      next: (res) => {
        this.product = res;
        this.loading = false;
        this.cdr.detectChanges();
        console.log('Product loaded:', this.product);
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  addToCart() {
    this.cartService.addItem(this.product);
    alert('Added to cart!');
  }
}