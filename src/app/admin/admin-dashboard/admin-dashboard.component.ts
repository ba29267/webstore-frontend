import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  adminSections = [
    {
      title: 'Products',
      description: 'Manage product catalog, add new products, edit existing ones',
      icon: '📦',
      link: '/admin/products'
    },
    {
      title: 'Orders',
      description: 'View and manage customer orders',
      icon: '🛒',
      link: '/admin/orders'
    },
    {
      title: 'Categories',
      description: 'Manage product categories',
      icon: '📁',
      link: '/admin/categories'
    },
    {
      title: 'Brands',
      description: 'Manage product brands',
      icon: '🏷️',
      link: '/admin/brands'
    },
    {
      title: 'Sizes',
      description: 'Manage available product sizes',
      icon: '📏',
      link: '/admin/sizes'
    },
    {
      title: 'Colors',
      description: 'Manage available product colors',
      icon: '🎨',
      link: '/admin/colors'
    },
    {
      title: 'Genders',
      description: 'Manage gender categories',
      icon: '👤',
      link: '/admin/genders'
    },
    {
      title: 'Reports',
      description: 'View sales reports and analytics',
      icon: '📊',
      link: '/admin/reports'
    }
  ];
}