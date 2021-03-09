import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { HomeComponent } from './home/home.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PhonesModule } from './modules/phones/phones.module';
import { TelephoneComponent } from './telephone/telephone.component';
import { StockageComponent } from './stockage/stockage.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
import { ProduitComponent } from './produit/produit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PcPortableComponent,
    PcBureauComponent,
    HomeComponent,
    PcAccessoiresComponent,
    ConnexionComponent,
    TelephoneComponent,
    StockageComponent,
    HelloworldComponent,
    PanierComponent,
    ProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
