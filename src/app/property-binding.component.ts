import { Component } from "@angular/core";

@Component({
    selector: "property-binding",
    template: `
    <img [src] = "imagenURL"/><br> 
    <button [disabled] = "buttonStatus">Mi botón</button>
    `/*el property binding usa los corchetes para referenciar el atributo y elimina las llaves
    Utiliza los corchetes para enlazar un determinado valor con respecto a una propiedad que se encuentra en el DOM*/,
    styles: [``]
})

export class PropertyBindingComponent { 
    imagenURL = "https://picsum.photos/400/200/";
    buttonStatus = false;
}