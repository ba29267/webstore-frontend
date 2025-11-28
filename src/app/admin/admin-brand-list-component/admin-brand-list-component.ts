import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand';

@Component({
  selector: 'app-admin-brand-list-component',
  imports: [],
  templateUrl: './admin-brand-list-component.html',
  styleUrl: './admin-brand-list-component.css',
})
export class AdminBrandListComponent implements OnInit {

  brands: any[] = [];
  loading = true;

  constructor(
    private brandService: BrandService,
    private router: Router
  ) {}

  ngOnInit() {
    this.brandService.getAll().subscribe(res => {
      this.brands = res;
      this.loading = false;
    });
  }

  create() {
    this.router.navigate(['/admin/brands/new']);
  }

  edit(id: number) {
    this.router.navigate(['/admin/brands', id]);
  }

  delete(id: number) {
    if (confirm('Delete brand?')) {
      this.brandService.delete(id).subscribe(() => {
        this.brands = this.brands.filter(b => b.id !== id);
      });
    }
  }
}
