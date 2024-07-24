import { Component } from "@angular/core";

@Component({
    selector: "event-filtering",
    template: `
        <input type ="text" placeholder = "Event Filtering" (keyup.enter) = "onKeyUp()">
    `,
    styles: [``],
    /*Vamos a poder utilizar un filtro en un determinado evento */
})
export class EventFilteringComponent {
    onKeyUp() {
        console.log("enter fue presionado");
}}