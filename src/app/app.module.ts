import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasesComponent } from './clases.component';
import { CursosComponent } from './cursos/cursos.component';
import { PropertyBindingComponent } from './binding-y-eventos/property-binding.component';
import { ClassBindingComponent } from './binding-y-eventos/class-binding.component';
import { StyleBindingComponent } from './binding-y-eventos/style-binding.components';
import { EventBindingComponent } from './binding-y-eventos/event-binding.component';
import { EventFilteringComponent } from './binding-y-eventos/event-filtering.component';
import { TemplateVariableComponent } from './binding-y-eventos/template-variable.component';
import { TwoWayDataBindingComponent } from './binding-y-eventos/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasesComponent,
    CursosComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVariableComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
