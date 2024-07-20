import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasesComponent } from './clases.component';
import { CursosComponent } from './cursos/cursos.component';
import { PropertyBindingComponent } from './property-binding.component';
import { ClassBindingComponent } from './class-binding.component';
import { StyleBindingComponent } from './style-binding.components';

@NgModule({
  declarations: [
    AppComponent,
    ClasesComponent,
    CursosComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
