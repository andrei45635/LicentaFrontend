import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'similarity',
        loadChildren: () => import('../similarity/similarity.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'library',
        loadChildren: () => import('../library/library.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'emotions',
        loadChildren: () => import('../emotions/emotions-eng.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'emotions-ro',
        loadChildren: () => import('../emotions-ro/emotions-ro.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
