import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SizeService } from '../../services/size';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-size-list-component',
  imports: [CommonModule],  // ← ADD THIS
  templateUrl: './admin-size-list-component.html',
  styleUrl: './admin-size-list-component.css',
})
export class AdminSizeListComponent implements OnInit {

  sizes: any[] = [];
  loading = true;

  constructor(
    private sizeService: SizeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sizeService.getAll().subscribe({
      next: (res) => {
        this.sizes = res;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading sizes:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  create() {
    this.router.navigate(['/admin/sizes/new']);
  }

  edit(id: number) {
    this.router.navigate(['/admin/sizes', id]);
  }

  delete(id: number) {
    if (confirm('Delete size?')) {
      this.sizeService.delete(id).subscribe({
        next: () => {
          this.sizes = this.sizes.filter(s => s.id !== id);
        },
        error: (err) => {
          console.error('Error deleting size:', err);
          alert('Failed to delete size');
        }
      });
    }
  }
}