import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { GenderService } from '../../services/gender';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-gender-list-component',
  imports: [CommonModule],  // ← ADD THIS
  templateUrl: './admin-gender-list-component.html',
  styleUrl: './admin-gender-list-component.css',
})
export class AdminGenderListComponent implements OnInit {

  genders: any[] = [];
  loading = true;

  constructor(
    private genderService: GenderService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.genderService.getAll().subscribe({
      next: (res) => {
        this.genders = res;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading genders:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  create() {
    this.router.navigate(['/admin/genders/new']);
  }

  edit(id: number) {
    this.router.navigate(['/admin/genders', id]);
  }

  delete(id: number) {
    if (confirm("Delete this gender?")) {
      this.genderService.delete(id).subscribe({
        next: () => {
          this.genders = this.genders.filter(g => g.id !== id);
        },
        error: (err) => {
          console.error('Error deleting gender:', err);
          alert('Failed to delete gender');
        }
      });
    }
  }
}