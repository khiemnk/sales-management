import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { TopbarComponent } from './core/layout/topbar/topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected pageTitle = 'Trang chủ';
  protected pageSubtitle = 'Tổng quan hiệu suất và pipeline mới nhất';
  protected pageAction = 'Thêm mới';

  private readonly pageMeta = new Map<string, { title: string; subtitle: string; action: string }>([
    ['/', { title: 'Trang chủ', subtitle: 'Tổng quan hiệu suất và pipeline mới nhất', action: 'Thêm cơ hội' }],
    ['/work-schedule', { title: 'Quản lý công việc - lịch hẹn', subtitle: 'Theo dõi công việc, trạng thái và doanh thu ước tính', action: 'Thêm lịch hẹn' }],
    ['/contracts', { title: 'Hợp đồng khách hàng', subtitle: 'Quản lý hồ sơ, hợp đồng và thông tin khách hàng', action: 'Tạo hợp đồng' }],
    ['/reports', { title: 'Báo cáo & KPI', subtitle: 'Hiệu suất doanh thu và KPI theo tháng', action: 'Xuất báo cáo' }]
  ]);

  constructor(private readonly router: Router) {
    this.resolveMeta(router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.resolveMeta(event.urlAfterRedirects));
  }

  private resolveMeta(url: string) {
    const cleanUrl = url.split('?')[0];
    const meta = this.pageMeta.get(cleanUrl) ?? this.pageMeta.get('/')!;
    this.pageTitle = meta.title;
    this.pageSubtitle = meta.subtitle;
    this.pageAction = meta.action;
  }
}
