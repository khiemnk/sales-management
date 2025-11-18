import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavLink = {
  label: string;
  route: string;
  badge?: string;
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly navGroups: { title: string; links: NavLink[] }[] = [
    {
      title: 'Chức năng chính',
      links: [
        { label: 'Trang chủ', route: '/' },
        { label: 'Quản lý công việc', route: '/work-schedule', badge: '5' },
        { label: 'Hợp đồng khách hàng', route: '/contracts' },
        { label: 'Báo cáo & KPI', route: '/reports' }
      ]
    }
  ];
}
