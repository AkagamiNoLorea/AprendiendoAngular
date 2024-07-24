import { Component } from "@angular/core";

@Component({
    selector: "event-binding",
    template: `
        <button (click)="save($event)">Event Binding</button>
    `,
    styles: [``],
    /*declaramos un evento en angular*/
})
export class EventBindingComponent {
    save(e){
        console.log(e)}
    }