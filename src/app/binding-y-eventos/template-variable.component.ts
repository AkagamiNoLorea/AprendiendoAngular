import { Component } from "@angular/core";

@Component({
    selector: "template-variable",
    template: `<br/>
        <input type="text" placeholder="Template variable"(keyup.enter)="onKeyUp(nombre.value)" #nombre/> 
    `/*Vamos a asignarle una variable a este elemento:
    <input type="text" placeholder="Template variable"(keyup.enter)="onKeyUp($event)"/>
    #nombre es una variable, que tiene un value     */,
    styles: [],
})
export class TemplateVariableComponent {
    onKeyUp(usuario) {
        console.log(usuario);
    }
}