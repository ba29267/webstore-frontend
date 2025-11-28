import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from '../../services/color';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-color-form-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-color-form-component.html',
  styleUrl: './admin-color-form-component.css',
})
export class AdminColorFormComponent implements OnInit {

  id: number | null = null;
  model = {
    name: '',
    hex: '#000000'
  };
  loading = false;
  submitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colorService: ColorService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = Number(paramId);
      this.loadColor();
    }
  }

  loadColor() {
    this.loading = true;
    this.colorService.getById(this.id!).subscribe({
      next: (res: any) => {
        this.model = {
          name: res.name,
          hex: res.hex
        };
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading color:', err);
        alert('Failed to load color');
        this.loading = false;
        this.router.navigate(['/admin/colors']);
      }
    });
  }

  save() {
    if (!this.model.name.trim()) {
      alert('Name is required');
      return;
    }

    if (!this.model.hex.match(/^#[0-9A-Fa-f]{6}$/)) {
      alert('Invalid hex color format (e.g., #FF5733)');
      return;
    }

    this.submitting = true;

    const observable = this.id
      ? this.colorService.update(this.id, this.model)
      : this.colorService.create(this.model);

    observable.subscribe({
      next: () => {
        alert(this.id ? 'Color updated!' : 'Color created!');
        this.router.navigate(['/admin/colors']);
      },
      error: (err) => {
        console.error('Error saving color:', err);
        alert('Failed to save color');
        this.submitting = false;
        this.cdr.detectChanges();
      }
    });
  }

  cancel() {
    this.router.navigate(['/admin/colors']);
  }
}