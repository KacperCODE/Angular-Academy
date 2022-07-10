import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN, regexpValidator } from '../../shared/validators/regexp-validator';

interface UserRegistrationDetails {
  name: string;
  surname: string;
  email: string;
  tosAccepted: boolean;
}
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  userDetails: FormGroup;

  tosAccepted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userDetails = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, regexpValidator(EMAIL_PATTERN)]),
    });
  }

  resetForm() {
    this.userDetails.reset();
    this.tosAccepted = false;
  }

  onTosCheckboxChange(isTosAccepted: boolean) {
    this.tosAccepted = isTosAccepted;
  }


  submitForm() {
    const userRegistrationDetails: UserRegistrationDetails = {
      name: this.userDetails.controls.name.value,
      surname: this.userDetails.controls.surname.value,
      email: this.userDetails.controls.email.value,
      tosAccepted: this.tosAccepted
    }

    console.log(userRegistrationDetails);
  }
}
