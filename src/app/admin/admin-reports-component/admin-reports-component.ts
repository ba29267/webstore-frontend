import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/report';

@Component({
  selector: 'app-admin-reports-component',
  imports: [],
  templateUrl: './admin-reports-component.html',
  styleUrl: './admin-reports-component.css',
})
export class AdminReportsComponent implements OnInit {

  daily: any[] = [];
  monthly: any[] = [];
  top: any[] = [];

  loadingDaily = true;
  loadingMonthly = true;
  loadingTop = true;

  constructor(private reports: ReportsService) {}

  ngOnInit() {
    this.loadDaily();
    this.loadMonthly();
    this.loadTop();
  }

  loadDaily() {
    this.reports.daily().subscribe((res: any[]) => {
      this.daily = res;
      this.loadingDaily = false;
    });
  }

  loadMonthly() {
    this.reports.monthly().subscribe((res: any[]) => {
      this.monthly = res;
      this.loadingMonthly = false;
    });
  }

  loadTop() {
    this.reports.topProducts().subscribe((res: any[]) => {
      this.top = res;
      this.loadingTop = false;
    });
  }

}
