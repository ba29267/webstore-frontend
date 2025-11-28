import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-category-form-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-category-form-component.html',
  styleUrl: './admin-category-form-component.css',
})
export class AdminCategoryFormComponent implements OnInit {

  id: number | null = null;
  model = { name: '' };
  loading = false;
  submitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = Number(paramId);
      this.loadCategory();
    }
  }

  loadCategory() {
    this.loading = true;
    this.categoryService.getById(this.id!).subscribe({
      next: (res: any) => {
        this.model = { name: res.name };
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading category:', err);
        alert('Failed to load category');
        this.loading = false;
        this.router.navigate(['/admin/categories']);
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
      ? this.categoryService.update(this.id, this.model)
      : this.categoryService.create(this.model);

    observable.subscribe({
      next: () => {
        alert(this.id ? 'Category updated!' : 'Category created!');
        this.router.navigate(['/admin/categories']);
      },
      error: (err) => {
        console.error('Error saving category:', err);
        alert('Failed to save category');
        this.submitting = false;
        this.cdr.detectChanges();
      }
    });
  }

  cancel() {
    this.router.navigate(['/admin/categories']);
  }
}