import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { PromoBoxComponent } from './promo-box/promo-box.component';
import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';

import { SliderComponent } from './wrapper/slider/slider.component';
import { InfoServiceComponent } from './wrapper/info-service/info-service.component';
import { LatestWorkComponent } from './wrapper/latest-work/latest-work.component';
import { FeatureBottomComponent } from './wrapper/feature-bottom/feature-bottom.component';
import { ClientsComponent } from './wrapper/clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    PromoBoxComponent,
    FooterComponent,
    FooterBottomComponent,
    SliderComponent,
    InfoServiceComponent,
    LatestWorkComponent,
    FeatureBottomComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
