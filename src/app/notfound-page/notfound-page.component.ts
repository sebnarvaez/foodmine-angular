import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.css']
})
export class NotfoundPageComponent {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = "No se encuentra!";
  @Input() resetLinkText: string = "Volver";
  @Input() resetLinkRoute: string = "/";
}
