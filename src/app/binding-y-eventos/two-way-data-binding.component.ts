import { Component  } from '@angular/core';

@Component({
    selector: 'two-way-data-binding',
    templateUrl: "../app.component.html",
    styles: []
})
export class TwoWayDataBindingComponent {
    persona = {
        nombre: 'Fernando',
        edad: 25
    }
    /*no entenc com funciona, no entenc com se relaciona entre elements que no siguen la propia app.component.ts*/
}
