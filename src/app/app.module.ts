import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrontRoutesModule } from './front/front-routes/front-routes.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './front/layout/layout.component';
import { HomeComponent } from './front/home/home.component';
import { AboutComponent } from './front/about/about.component';
import { ObjectiveComponent } from './front/objective/objective.component';
import { ContactComponent } from './front/contact/contact.component';
import { WhiteningSystemComponent } from './front/whitening-system/whitening-system.component';
import { MineralMaskComponent } from './front/mineral-mask/mineral-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    ObjectiveComponent,
    ContactComponent,
    WhiteningSystemComponent,
    MineralMaskComponent
  ],
  imports: [
    BrowserModule,
    FrontRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
