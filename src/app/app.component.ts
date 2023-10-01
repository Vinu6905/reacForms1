import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reacForm1';
    form =new FormGroup({

      fname : new FormControl("",[Validators.required ,Validators.minLength(4), Validators.maxLength(8)]),
      lname :new FormControl("",[Validators.required  , Validators.minLength(4),Validators.maxLength(8)]),
      email :new FormControl("",[Validators.required ,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")]),
      phone : new FormControl("",[Validators.required ,Validators.pattern("[7-9]{1}[0-9]{9}")])

    })
    signuphere(){
      console.log(this.form.value)
    }
}
