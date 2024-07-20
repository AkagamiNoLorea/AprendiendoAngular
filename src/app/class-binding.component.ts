import { Component } from "@angular/core";

@Component({
    selector: 'class-binding',
    template: `<button [class.activo] = "isActive">Class Binding</button>`,
    /*el Class binding se encarga de añadir una determimada clase a un elemento en base a una condición */
    styles: [`
        .activo{
            background-color: red;
            color: white;
        }`]
})

export class ClassBindingComponent {
    isActive = true;

}