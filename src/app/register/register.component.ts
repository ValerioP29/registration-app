import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    profileImage: new FormControl(''),
    bio: new FormControl(''),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
