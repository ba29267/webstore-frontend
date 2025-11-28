import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-apply-discount-component',
  imports: [FormsModule],
  templateUrl: './admin-apply-discount-component.html',
  styleUrl: './admin-apply-discount-component.css',
})
export class AdminApplyDiscountComponent {

  id: number;
  discount = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  apply() {
    this.productService.applyDiscount(this.id, { discount: this.discount }).subscribe(() => {
      alert('Discount applied!');
      this.router.navigate(['/admin/products']);
    });
  }
}
