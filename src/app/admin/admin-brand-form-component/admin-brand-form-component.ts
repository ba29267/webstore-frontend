import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-brand-form-component',
  imports: [FormsModule],
  templateUrl: './admin-brand-form-component.html',
  styleUrl: './admin-brand-form-component.css',
})
export class AdminBrandFormComponent implements OnInit {

  id: number | null = null;
  model = { name: '' };
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService
  ) {}

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = Number(paramId);
      this.loadBrand();
    }
  }

  loadBrand() {
    this.loading = true;
    this.brandService.getById(this.id!).subscribe((res: any) => {
      this.model = { name: res.name };
      this.loading = false;
    });
  }

  save() {
    if (this.id) {
      this.brandService.update(this.id, this.model).subscribe(() => {
        alert('Brand updated!');
        this.router.navigate(['/admin/brands']);
      });
    } else {
      this.brandService.create(this.model).subscribe(() => {
        alert('Brand created!');
        this.router.navigate(['/admin/brands']);
      });
    }
  }
}