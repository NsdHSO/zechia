import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import {
  RouterModule,
  Routes
}                         from "@angular/router";
import { TruckComponent } from "./truck.component";

const routes : Routes = [
  {
    path      : '',
    component : TruckComponent
  }
]

@NgModule ( {
  declarations : [],
  imports      : [
    CommonModule,
    RouterModule.forChild ( routes )
  ],
  exports      : [ RouterModule ]
} )
export class TruckRoutingModule {}
