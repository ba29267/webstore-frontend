import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-product-form-component',
  imports: [FormsModule],
  templateUrl: './admin-product-form-component.html',
  styleUrl: './admin-product-form-component.css',
})
export class AdminProductFormComponent implements OnInit {

  isEdit = false;
  id: number | null = null;

  product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    brandId: null,
    categoryId: null,
    sizeId: null,
    colorId: null,
    genderId: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.isEdit = true;
      this.productService.getById(this.id).subscribe(data => {
        this.product = data;
      });
    }
  }

  submit() {
    if (this.isEdit) {
      this.productService.update(this.id!, this.product).subscribe(() => {
        alert("Product updated!");
        this.router.navigate(['/admin/products']);
      });
    } else {
      this.productService.create(this.product).subscribe(() => {
        alert("Product created!");
        this.router.navigate(['/admin/products']);
      });
    }
  }
}