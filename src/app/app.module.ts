import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Importar Rutas
import { ROUTES } from './app.routes';

// Importar Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
