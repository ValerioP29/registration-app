import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
