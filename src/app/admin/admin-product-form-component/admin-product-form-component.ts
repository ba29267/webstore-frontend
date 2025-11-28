import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-product-form-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-product-form-component.html',
  styleUrl: './admin-product-form-component.css',
})
export class AdminProductFormComponent implements OnInit {

  isEdit = false;
  id: number | null = null;
  loading = false;
  submitting = false;

  product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    brandId: null as number | null,
    categoryId: null as number | null,
    sizeId: null as number | null,
    colorId: null as number | null,
    genderId: null as number | null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id && !isNaN(this.id)) {
      this.isEdit = true;
      this.loadProduct();
    }
  }

  loadProduct() {
    this.loading = true;
    this.productService.getById(this.id!).subscribe({
      next: (data) => {
        this.product = {
          name: data.name || '',
          description: data.description || '',
          price: data.price || 0,
          quantity: data.quantity || 0,
          brandId: data.brandId,
          categoryId: data.categoryId,
          sizeId: data.sizeId,
          colorId: data.colorId,
          genderId: data.genderId
        };
        this.loading = false;
        this.cdr.detectChanges();
        console.log('Product loaded:', this.product);
      },
      error: (err) => {
        console.error('Error loading product:', err);
        alert('Failed to load product');
        this.loading = false;
        this.router.navigate(['/admin/products']);
      }
    });
  }

  submit() {
    if (!this.product.name || this.product.price <= 0 || this.product.quantity < 0) {
      alert('Please fill in all required fields correctly');
      return;
    }

    this.submitting = true;

    const observable = this.isEdit
      ? this.productService.update(this.id!, this.product)
      : this.productService.create(this.product);

    observable.subscribe({
      next: () => {
        alert(this.isEdit ? "Product updated!" : "Product created!");
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        console.error('Error saving product:', err);
        alert('Failed to save product. Please try again.');
        this.submitting = false;
        this.cdr.detectChanges();
      }
    });
  }

  cancel() {
    this.router.navigate(['/admin/products']);
  }
}