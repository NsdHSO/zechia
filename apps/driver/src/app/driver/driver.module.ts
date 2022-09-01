import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { DriverRoutingModule } from './driver-routing.module';

@NgModule({
  declarations: [DriverComponent],
  imports: [CommonModule, DriverRoutingModule],
})
export class DriverModule {}
