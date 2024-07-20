import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasesComponent } from './clases.component';
import { CursosComponent } from './cursos/cursos.component';
import { PropertyBindingComponent } from './property-binding.component';

@NgModule({
  declarations: [
    AppComponent, ClasesComponent, CursosComponent, PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
