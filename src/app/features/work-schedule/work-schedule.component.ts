import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Appointment = {
  name: string;
  stt: number;
  datetime: string;
  revenue: string;
  task: string;
  status: 'Đang xử lý' | 'Đã hoàn tất' | 'Đang chờ';
  customer: string;
  opportunity: string;
  phone: string;
};

@Component({
  selector: 'app-work-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-schedule.component.html',
  styleUrl: './work-schedule.component.scss'
})
export class WorkScheduleComponent {
  readonly filters = ['Tất cả', 'Tuần này', 'Đang xử lý', 'Đã hoàn tất', 'Đang chờ'];

  readonly appointments: Appointment[] = [
    {
      name: 'Phúc Tâm An',
      stt: 1,
      datetime: '18/11/2025 · 09:30',
      revenue: '120.000.000 ₫',
      task: 'Demo giải pháp',
      status: 'Đang xử lý',
      customer: 'Nguyễn Phúc Tâm',
      opportunity: 'CRM doanh nghiệp',
      phone: '0933 123 456'
    },
    {
      name: 'Bảo Gia Group',
      stt: 2,
      datetime: '18/11/2025 · 13:00',
      revenue: '86.000.000 ₫',
      task: 'Gửi báo giá',
      status: 'Đang chờ',
      customer: 'Lê Minh Gia',
      opportunity: 'Bảo hiểm nhân sự',
      phone: '0903 654 987'
    },
    {
      name: 'Tân Phú Motors',
      stt: 3,
      datetime: '19/11/2025 · 10:15',
      revenue: '210.000.000 ₫',
      task: 'Khảo sát nhu cầu',
      status: 'Đang xử lý',
      customer: 'Trần Tân Phú',
      opportunity: 'Dịch vụ bảo trì',
      phone: '0987 432 123'
    },
    {
      name: 'Hưng Phát Decor',
      stt: 4,
      datetime: '20/11/2025 · 14:00',
      revenue: '65.000.000 ₫',
      task: 'Ký hợp đồng',
      status: 'Đã hoàn tất',
      customer: 'Vũ Hưng Phát',
      opportunity: 'Nâng cấp CRM',
      phone: '0917 222 999'
    }
  ];

  protected statusClass(status: Appointment['status']) {
    switch (status) {
      case 'Đang xử lý':
        return 'processing';
      case 'Đã hoàn tất':
        return 'completed';
      default:
        return 'pending';
    }
  }
}
