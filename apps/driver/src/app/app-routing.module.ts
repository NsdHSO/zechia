import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'tms'
  },
  {
    path: 'tms',
    loadChildren: () => import('frame/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'driver',
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
