import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { PromoBoxComponent } from './promo-box/promo-box.component';
import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    PromoBoxComponent,
    FooterComponent,
    FooterBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
