import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { WorkScheduleComponent } from './features/work-schedule/work-schedule.component';
import { ContractsComponent } from './features/contracts/contracts.component';
import { ReportsComponent } from './features/reports/reports.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'Trang chủ | BIC CRM' },
  { path: 'work-schedule', component: WorkScheduleComponent, title: 'Quản lý công việc | BIC CRM' },
  { path: 'contracts', component: ContractsComponent, title: 'Hợp đồng khách hàng | BIC CRM' },
  { path: 'reports', component: ReportsComponent, title: 'Báo cáo & KPI | BIC CRM' },
  { path: '**', redirectTo: '' }
];
