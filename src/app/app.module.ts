import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListclientsComponent } from './components/listclients/listclients.component';
import { KpiclientsComponent } from './components/kpiclients/kpiclients.component';
import { CreateclientsComponent } from './components/createclients/createclients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
@NgModule({
  declarations: [
    AppComponent,
    ListclientsComponent,
    KpiclientsComponent,
    CreateclientsComponent,
    PrediccionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
