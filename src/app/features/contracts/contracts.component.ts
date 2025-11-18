import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Contract = {
  code: string;
  customer: string;
  package: string;
  value: string;
  signedDate: string;
  owner: string;
  status: 'Đang hiệu lực' | 'Chờ duyệt' | 'Hết hiệu lực';
};

@Component({
  selector: 'app-contracts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.scss'
})
export class ContractsComponent {
  readonly breadcrumbs = ['Trang chủ', 'Quản lý hồ sơ', 'Hợp đồng khách hàng'];
  readonly filters = ['Tất cả', 'Đang hiệu lực', 'Chờ duyệt', 'Hết hiệu lực'];

  readonly contracts: Contract[] = [
    {
      code: 'HD-2025-001',
      customer: 'Phúc Tâm An',
      package: 'Gói bảo hiểm doanh nghiệp',
      value: '320.000.000 ₫',
      signedDate: '01/11/2025',
      owner: 'Trần Linh',
      status: 'Đang hiệu lực'
    },
    {
      code: 'HD-2025-014',
      customer: 'Bảo Gia Group',
      package: 'Triển khai CRM',
      value: '210.000.000 ₫',
      signedDate: '28/10/2025',
      owner: 'Nguyễn Tín',
      status: 'Chờ duyệt'
    },
    {
      code: 'HD-2024-118',
      customer: 'Tân Phú Motors',
      package: 'Bảo hiểm đội xe',
      value: '410.000.000 ₫',
      signedDate: '12/08/2024',
      owner: 'Phạm Khánh',
      status: 'Hết hiệu lực'
    }
  ];

  protected statusClass(status: Contract['status']) {
    switch (status) {
      case 'Đang hiệu lực':
        return 'active';
      case 'Chờ duyệt':
        return 'pending';
      default:
        return 'expired';
    }
  }
}
