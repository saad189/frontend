import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MODULE_ADDRESS } from 'src/Models/module-info';


const routes: Routes = [{
  path: MODULE_ADDRESS.SETTINGS,
  loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
