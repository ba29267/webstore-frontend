import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SizeService } from '../../services/size';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-size-form-component',
  imports: [FormsModule],
  templateUrl: './admin-size-form-component.html',
  styleUrl: './admin-size-form-component.css',
})
export class AdminSizeFormComponent implements OnInit {

  id: number | null = null;
  model = { name: '' };
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sizeService: SizeService
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
    this.sizeService.getById(this.id!).subscribe((res: any) => {
      this.model = { name: res.name };
      this.loading = false;
    });
  }


  save() {
    if (this.id) {
      this.sizeService.update(this.id, this.model).subscribe(() => {
        alert('Size updated!');
        this.router.navigate(['/admin/sizes']);
      });
    } else {
      this.sizeService.create(this.model).subscribe(() => {
        alert('Size created!');
        this.router.navigate(['/admin/sizes']);
      });
    }
  }
}
