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
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    title: 'Welcome',
    component: LayoutComponent,
    children: [
      {
        component: HomeComponent,
        path: '',
      },
    ],
  },
  {
    path: 'auth',
    title: 'Authentication',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'books',
    title: 'Books',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'authors',
    title: 'Authors',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/authors/authors.module').then((m) => m.AuthorsModule),
  },
  {
    path: 'publishers',
    title: 'Publishers',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/publishers/publishers.module').then(
        (m) => m.PublishersModule
      ),
  },
  {
    path: 'genres',
    title: 'Genres',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/genres/genres.module').then((m) => m.GenresModule),
  },
  {
    path: 'orders',
    title: 'Orders',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'admin',
    title: 'Admin',
    component: LayoutComponent,
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'profile', component: SettingsComponent }],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [{ path: 'settings', component: SettingsComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'features', component: FeaturesComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'faqs', component: FaqsComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'help', component: HelpComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'contact', component: ContactComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'about-us', component: AboutUsComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '**', component: NotFoundComponent }],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
