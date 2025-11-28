import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenderService } from '../../services/gender';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-gender-form-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-gender-form-component.html',
  styleUrl: './admin-gender-form-component.css',
})
export class AdminGenderFormComponent implements OnInit {

  id: number | null = null;
  model = { name: '' };
  loading = false;
  submitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genderService: GenderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = Number(paramId);
      this.loadGender();
    }
  }

  loadGender() {
    this.loading = true;
    this.genderService.getById(this.id!).subscribe({
      next: (res: any) => {
        this.model = { name: res.name };
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading gender:', err);
        alert('Failed to load gender');
        this.loading = false;
        this.router.navigate(['/admin/genders']);
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
      ? this.genderService.update(this.id, this.model)
      : this.genderService.create(this.model);

    observable.subscribe({
      next: () => {
        alert(this.id ? 'Gender updated!' : 'Gender created!');
        this.router.navigate(['/admin/genders']);
      },
      error: (err) => {
        console.error('Error saving gender:', err);
        alert('Failed to save gender');
        this.submitting = false;
        this.cdr.detectChanges();
      }
    });
  }

  cancel() {
    this.router.navigate(['/admin/genders']);
  }
}