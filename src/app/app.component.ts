import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  enteredData = '';
  onSubmit() 
  {
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const age = (<HTMLInputElement>document.getElementById("age")).value;
    const season = (<HTMLInputElement>document.getElementById("season")).value;
    const canDrive = (<HTMLInputElement>document.querySelector('input[name="canDrive"]:checked')).value;
    
    this.enteredData = "The user entered: Name(" + name + "), Age(" + age + "), Favorite Season(" + season + "), Can Drive a Car(" + canDrive + ")";
    }
  title = 'SDA';
}
