import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Hello'

  constructor(){
    this.changeName('Johnn')
  }

  changeName(name: string): void{
    this.name = name
  }
}
