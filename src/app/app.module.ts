import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { AboutComponent } from './body/about/about.component';
import { ResumeComponent } from './body/resume/resume.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BodyComponent } from './body/body/body.component';
import { SkillsComponent } from './body/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    FooterComponent,
    BodyComponent,
    SkillsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
