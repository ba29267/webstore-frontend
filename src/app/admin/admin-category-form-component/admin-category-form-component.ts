import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-category-form-component',
  imports: [FormsModule],
  templateUrl: './admin-category-form-component.html',
  styleUrl: './admin-category-form-component.css',
})
export class AdminCategoryFormComponent implements OnInit {

  id: number | null = null;
  model = { name: '' };
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
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
    this.categoryService.getById(this.id!).subscribe((res: any) => {
      this.model = { name: res.name };
      this.loading = false;
    });
  }

  save() {
    if (this.id) {
      this.categoryService.update(this.id, this.model).subscribe(() => {
        alert('Category updated!');
        this.router.navigate(['/admin/categories']);
      });
    } else {
      this.categoryService.create(this.model).subscribe(() => {
        alert('Category created!');
        this.router.navigate(['/admin/categories']);
      });
    }
  }

}