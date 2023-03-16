import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutUsComponent } from './core/pages/about-us/about-us.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { FaqsComponent } from './core/pages/faqs/faqs.component';
import { FeaturesComponent } from './core/pages/features/features.component';
import { HelpComponent } from './core/pages/help/help.component';
import { HomeComponent } from './core/pages/home/home.component';
import { SettingsComponent } from './core/pages/settings/settings.component';

const routes: Routes = [
  { path: '', title: 'Welcome', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./features/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./features/authors/authors.module').then((m) => m.AuthorsModule),
  },
  {
    path: 'publishers',
    loadChildren: () =>
      import('./features/publishers/publishers.module').then(
        (m) => m.PublishersModule
      ),
  },
  {
    path: '',
    children: [{ path: 'profile', component: SettingsComponent }],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [{ path: 'settings', component: SettingsComponent }],
  },
  {
    path: '',
    children: [{ path: 'features', component: FeaturesComponent }],
  },
  {
    path: '',
    children: [{ path: 'faqs', component: FaqsComponent }],
  },
  {
    path: '',
    children: [{ path: 'help', component: HelpComponent }],
  },
  {
    path: '',
    children: [{ path: 'contact', component: ContactComponent }],
  },
  {
    path: '',
    children: [{ path: 'about-us', component: AboutUsComponent }],
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [{ path: '**', component: NotFoundComponent }],
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
