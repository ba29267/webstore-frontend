import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CategoryService } from '../../services/category';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-category-list-component',
  imports: [CommonModule],  // ← ADD THIS
  templateUrl: './admin-category-list-component.html',
  styleUrl: './admin-category-list-component.css',
})
export class AdminCategoryListComponent implements OnInit {

  categories: any[] = [];
  loading = true;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.categoryService.getAll().subscribe({
      next: (res) => {
        this.categories = res;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading categories:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  edit(id: number) {
    this.router.navigate(['/admin/categories', id]);
  }

  create() {
    this.router.navigate(['/admin/categories/new']);
  }

  delete(id: number) {
    if (confirm('Delete category?')) {
      this.categoryService.delete(id).subscribe({
        next: () => {
          this.categories = this.categories.filter(c => c.id !== id);
        },
        error: (err) => {
          console.error('Error deleting category:', err);
          alert('Failed to delete category');
        }
      });
    }
  }
}