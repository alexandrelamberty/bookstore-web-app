import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AuthGuard } from './features/auth/guards/auth.guard';
import { AboutUsComponent } from './core/pages/about-us/about-us.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { FaqsComponent } from './core/pages/faqs/faqs.component';
import { FeaturesComponent } from './core/pages/features/features.component';
import { HelpComponent } from './core/pages/help/help.component';
import { HomeComponent } from './core/pages/home/home.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { SettingsComponent } from './core/pages/settings/settings.component';
import { AuthModule } from './features/auth/auth.module';
import { AuthInterceptor } from './features/auth/interceptors/auth.interceptor';
import { BooksModule } from './features/books/books.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    BooksModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SettingsComponent,
    FeaturesComponent,
    FaqsComponent,
    HelpComponent,
    ContactComponent,
    NotFoundComponent,
    AboutUsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
