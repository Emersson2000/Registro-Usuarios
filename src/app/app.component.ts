import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  miFormulario = new FormGroup({
     nombre : new FormControl('', Validators.required), 
     apellido : new FormControl('', Validators.required), 
     fechaNacimiento : new FormControl('', Validators.required), 
     direccion : new FormControl('', Validators.required)
  });
}
