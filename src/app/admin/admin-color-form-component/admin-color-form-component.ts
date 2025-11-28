import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from '../../services/color';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-color-form-component',
  imports: [FormsModule],
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colorService: ColorService
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
    this.colorService.getById(this.id!).subscribe((res: any) => {
      this.model = {
        name: res.name,
        hex: res.hex
      };
      this.loading = false;
    });
  }

  save() {
    if (this.id) {
      this.colorService.update(this.id, this.model).subscribe(() => {
        alert('Color updated!');
        this.router.navigate(['/admin/colors']);
      });
    } else {
      this.colorService.create(this.model).subscribe(() => {
        alert('Color created!');
        this.router.navigate(['/admin/colors']);
      });
    }
  }
}