import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BrandService } from '../../services/brand';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-brand-form-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-brand-form-component.html',
  styleUrl: './admin-brand-form-component.css',
})
export class AdminBrandFormComponent implements OnInit {

  id: number | null = null;
  model = { name: '' };
  loading = false;
  submitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService,
    private cdr: ChangeDetectorRef
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
    this.brandService.getById(this.id!).subscribe({
      next: (res: any) => {
        this.model = { name: res.name };
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading brand:', err);
        alert('Failed to load brand');
        this.loading = false;
        this.router.navigate(['/admin/brands']);
      }
    });
  }

  save() {
    if (!this.model.name.trim()) {
      alert('Name is required');
      return;
    }

    this.submitting = true;

    const observable = this.id
      ? this.brandService.update(this.id, this.model)
      : this.brandService.create(this.model);

    observable.subscribe({
      next: () => {
        alert(this.id ? 'Brand updated!' : 'Brand created!');
        this.router.navigate(['/admin/brands']);
      },
      error: (err) => {
        console.error('Error saving brand:', err);
        alert('Failed to save brand');
        this.submitting = false;
        this.cdr.detectChanges();
      }
    });
  }

  cancel() {
    this.router.navigate(['/admin/brands']);
  }
}