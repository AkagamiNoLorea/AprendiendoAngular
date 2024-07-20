import { Component } from "@angular/core";

@Component({
    selector: "style-binding",
    template: `
    <button [style.border-color]="isActive ? 'blue' : 'red'">Style Binding</button>`,
    styles: [``]
    /* Con style binding puedes utilizar propiedades que existen en el objeto para de esa manera poder darle un estilo a nuestros elementos. */
})

export class StyleBindingComponent { 
    isActive = true;
}