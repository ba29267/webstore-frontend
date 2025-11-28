import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from '../../services/color';

@Component({
  selector: 'app-admin-color-list-component',
  imports: [],
  templateUrl: './admin-color-list-component.html',
  styleUrl: './admin-color-list-component.css',
})
export class AdminColorListComponent implements OnInit {

  colors: any[] = [];
  loading = true;

  constructor(
    private colorService: ColorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.colorService.getAll().subscribe(res => {
      this.colors = res;
      this.loading = false;
    });
  }

  create() {
    this.router.navigate(['/admin/colors/new']);
  }

  edit(id: number) {
    this.router.navigate(['/admin/colors', id]);
  }

  delete(id: number) {
    if (confirm('Delete this color?')) {
      this.colorService.delete(id).subscribe(() => {
        this.colors = this.colors.filter(c => c.id !== id);
      });
    }
  }
}
