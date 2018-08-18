import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const WidgetRoutes: Routes = [{
  path: '',
  component: WidgetComponent,
  data: {
    breadcrumb: 'Widget',
    icon: 'icofont-speed-meter bg-c-blue',
    status: false
  },
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetRoutes),
    SharedModule
  ],
  declarations: [WidgetComponent]
})
export class WidgetModule { }
