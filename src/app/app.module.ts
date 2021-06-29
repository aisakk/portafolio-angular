import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { FirstComponent } from './body/first/first.component';
import { AboutComponent } from './body/about/about.component';
import { ResumeComponent } from './body/resume/resume.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { ContactComponent } from './body/contact/contact.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BodyComponent } from './body/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FirstComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
