import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ObjectiveComponent } from '../objective/objective.component';
import { ContactComponent } from '../contact/contact.component';
import { WhiteningSystemComponent } from '../whitening-system/whitening-system.component';
import { MineralMaskComponent } from '../mineral-mask/mineral-mask.component';
import { ColorStickSystemComponent } from '../color-stick-system/color-stick-system.component';

import { FrontRoutesRoutingModule } from './front-routes-routing.module';

const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'objective', component: ObjectiveComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'whitening-system', component: WhiteningSystemComponent },
    { path: 'mineral-mask', component: MineralMaskComponent },
    { path: 'color-stick-system', component: ColorStickSystemComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  declarations: []
})
export class FrontRoutesModule { }
