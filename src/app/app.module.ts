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
import { ColorStickSystemComponent } from './front/color-stick-system/color-stick-system.component';
import { EventsComponent } from './front/events/events.component';
import { TutorialsComponent } from './front/tutorials/tutorials.component';
import { BellasCornerComponent } from './front/bellas-corner/bellas-corner.component';
import { BeautyCaravanComponent } from './front/beauty-caravan/beauty-caravan.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    ObjectiveComponent,
    ContactComponent,
    WhiteningSystemComponent,
    MineralMaskComponent,
    ColorStickSystemComponent,
    EventsComponent,
    TutorialsComponent,
    BellasCornerComponent,
    BeautyCaravanComponent
  ],
  imports: [
    BrowserModule,
    FrontRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
