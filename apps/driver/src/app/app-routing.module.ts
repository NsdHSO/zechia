import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';


const routes: Routes = [
  {
    path: 'driver',
    loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)
  },
  {
    path: 'truck',
    loadChildren: () => import('./truck/truck.module').then(m => m.TruckModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
