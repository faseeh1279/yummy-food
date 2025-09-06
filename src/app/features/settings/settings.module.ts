import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './pages/settings.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'settings-page',
    component: SettingsComponent
  }
];
@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
