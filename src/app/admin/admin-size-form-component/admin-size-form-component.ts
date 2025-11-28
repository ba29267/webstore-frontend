import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SizeService } from '../../services/size';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-size-form-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-size-form-component.html',
  styleUrl: './admin-size-form-component.css',
})
export class AdminSizeFormComponent implements OnInit {

  id: number | null = null;
  model = { name: '' };
  loading = false;
  submitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sizeService: SizeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = Number(paramId);
      this.loadSize();
    }
  }

  loadSize() {
    this.loading = true;
    this.sizeService.getById(this.id!).subscribe({
      next: (res: any) => {
        this.model = { name: res.name };
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading size:', err);
        alert('Failed to load size');
        this.loading = false;
        this.router.navigate(['/admin/sizes']);
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
      ? this.sizeService.update(this.id, this.model)
      : this.sizeService.create(this.model);

    observable.subscribe({
      next: () => {
        alert(this.id ? 'Size updated!' : 'Size created!');
        this.router.navigate(['/admin/sizes']);
      },
      error: (err) => {
        console.error('Error saving size:', err);
        alert('Failed to save size');
        this.submitting = false;
        this.cdr.detectChanges();
      }
    });
  }

  cancel() {
    this.router.navigate(['/admin/sizes']);
  }
}