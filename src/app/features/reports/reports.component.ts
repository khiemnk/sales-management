import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type MonthlyReport = { month: string; revenue: number; target: number };
type Performer = { name: string; role: string; revenue: string; progress: number };

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  readonly kpis = [
    { label: 'Doanh thu thực tế', value: '5.2 Tỷ ₫', detail: '+14% so với chỉ tiêu' },
    { label: 'Tổng cơ hội thắng', value: '128 cơ hội', detail: 'Từ 6 nhóm sản phẩm' },
    { label: 'Giá trị trung bình', value: '40 Triệu ₫', detail: 'Mỗi hợp đồng' }
  ];

  readonly monthlyReports: MonthlyReport[] = [
    { month: '07', revenue: 510, target: 480 },
    { month: '08', revenue: 498, target: 510 },
    { month: '09', revenue: 545, target: 520 },
    { month: '10', revenue: 562, target: 540 },
    { month: '11', revenue: 590, target: 560 }
  ];

  readonly topPerformers: Performer[] = [
    { name: 'Trần Linh', role: 'Key Account', revenue: '1.2 Tỷ ₫', progress: 92 },
    { name: 'Nguyễn Tín', role: 'Sales Lead', revenue: '980 Triệu ₫', progress: 84 },
    { name: 'Phạm Khánh', role: 'Business Consultant', revenue: '870 Triệu ₫', progress: 78 }
  ];

  readonly maxKpi = Math.max(...this.monthlyReports.map((report) => Math.max(report.revenue, report.target)));
}
