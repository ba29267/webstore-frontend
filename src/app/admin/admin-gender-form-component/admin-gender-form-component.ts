import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenderService } from '../../services/gender';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-gender-form-component',
  imports: [FormsModule],
  templateUrl: './admin-gender-form-component.html',
  styleUrl: './admin-gender-form-component.css',
})
export class AdminGenderFormComponent implements OnInit {

  id: number | null = null;

  model = {
    name: ''
  };

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genderService: GenderService
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

    this.genderService.getById(this.id!).subscribe((res: any) => {
      this.model = { name: res.name };
      this.loading = false;
    });
  }

  save() {
    if (this.id) {
      this.genderService.update(this.id, this.model).subscribe(() => {
        alert("Gender updated!");
        this.router.navigate(['/admin/genders']);
      });
    } else {
      this.genderService.create(this.model).subscribe(() => {
        alert("Gender created!");
        this.router.navigate(['/admin/genders']);
      });
    }
  }
}