import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErorrComponent } from './erorr/erorr.component';
import { HomeComponent } from './home/home.component';
import { DevpackageComponent } from './pricing/devpackage/devpackage.component';
import { ExplorerpackageComponent } from './pricing/explorerpackage/explorerpackage.component';
import { PricingComponent } from './pricing/pricing.component';
import { VisoinpackageComponent } from './pricing/visoinpackage/visoinpackage.component';

const routes: Routes = [
  {path:'', component:HomeComponent, data: {index: 0}},
  {path:'hero', component:HomeComponent, data: {index: 1}},
  {path:'pricing', component:PricingComponent, data: {index: 2},
  children: [
    {
      path: '', // child route path
      component: DevpackageComponent,
    },
    {
      path: 'dev',
      component: DevpackageComponent,
    },
    {
      path: 'explorer', 
      component: ExplorerpackageComponent, 
    },
    {
      path: 'vision',
      component: VisoinpackageComponent,
    },
          ]
  },
  {path:'dashbord', component:DashboardComponent, data: {index: 3}},
  {path:'**', component:ErorrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
