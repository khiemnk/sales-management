import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TrendPoint = { month: string; revenue: number; target: number };
type Meeting = { customer: string; opportunity: string; value: string; status: string; time: string };

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly statCards = [
    { label: 'Doanh thu tháng', value: '820 Triệu ₫', delta: 12, caption: 'So với cùng kỳ', accent: 'primary' },
    { label: 'Cơ hội mới', value: '37 cơ hội', delta: 8, caption: 'Trong tuần này', accent: 'secondary' },
    { label: 'Tỉ lệ chốt', value: '46%', delta: 3, caption: 'Pipeline đang xử lý', accent: 'tertiary' },
    { label: 'Doanh thu ước tính', value: '1.8 Tỷ ₫', delta: -5, caption: '3 tháng tới', accent: 'warning' }
  ];

  readonly trendData: TrendPoint[] = [
    { month: '01', revenue: 310, target: 280 },
    { month: '02', revenue: 295, target: 310 },
    { month: '03', revenue: 342, target: 320 },
    { month: '04', revenue: 360, target: 340 },
    { month: '05', revenue: 388, target: 360 },
    { month: '06', revenue: 415, target: 380 }
  ];

  readonly meetings: Meeting[] = [
    { customer: 'Phúc Tâm An', opportunity: 'Gói bảo hiểm doanh nghiệp', value: '120 Triệu ₫', status: 'Sắp diễn ra', time: 'Hôm nay · 09:30' },
    { customer: 'Minh Phát Land', opportunity: 'Gia hạn hợp đồng dịch vụ', value: '86 Triệu ₫', status: 'Hoàn tất', time: 'Hôm qua · 15:00' },
    { customer: 'Bảo Gia Group', opportunity: 'Triển khai CRM', value: '210 Triệu ₫', status: 'Đang chờ', time: 'Thứ 5 · 10:00' },
    { customer: 'Tân Phú Motors', opportunity: 'Bảo hiểm đội xe', value: '310 Triệu ₫', status: 'Sắp diễn ra', time: 'Thứ 6 · 14:20' }
  ];

  readonly quickActions = [
    { label: 'Thêm khách hàng mới', description: 'Tạo hồ sơ và phân công chăm sóc' },
    { label: 'Thêm cơ hội mới', description: 'Ghi nhận nhu cầu & pipeline' },
    { label: 'Tạo lịch hẹn', description: 'Trao đổi với khách hàng' }
  ];

  readonly maxRevenue = Math.max(...this.trendData.map((item) => Math.max(item.revenue, item.target)));
  private readonly statusLookup = new Map([
    ['sắp diễn ra', 'upcoming'],
    ['hoàn tất', 'done'],
    ['đang chờ', 'pending']
  ]);

  protected statusClass(status: string) {
    return this.statusLookup.get(status.toLowerCase()) ?? 'pending';
  }
}
