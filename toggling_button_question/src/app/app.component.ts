import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  isDisabled: boolean = false;
  //TODO 1: Create a boolean property by the name of 'isDisabled' and initially set it to 'false'


  buttonText: string = "Disable";


	//TODO 2: Create a string property by the name of 'buttonText' and initially set it to 'Disable'

	onClick() {

    console.log(this.isDisabled);
    console.log(this.buttonText);

    if (this.isDisabled == false ) {

      this.isDisabled = true;

      this.buttonText = 'Disable';

    } else {

      this.isDisabled = false;

      this.buttonText = 'Enable';

    }
		//TODO 3: Toggle the isDisabled property

		//TODO 4: Using if condition, toggle the 'buttonText' property.
		//if 'isDisabled' is false then change it to 'Disable' else 'Enable'

	}
}
