import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserDetails } from "../../@api/user/user.model";
import { UsersStore } from "../../@store";
import {
  EMAIL_PATTERN,
  regexpValidator,
} from "../../shared/validators/regexp-validator";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"],
})
export class CreateAccountComponent implements OnInit {
  userDetails: FormGroup;
  createdUsers: UserDetails[];

  tosAccepted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersStore: UsersStore,
  ) {}

  ngOnInit() {
    this.userDetails = this.formBuilder.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      surname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(null, [
        Validators.required,
        regexpValidator(EMAIL_PATTERN),
      ]),
    });

    this.usersStore.users$.subscribe((users) => {
      this.createdUsers = users;
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
    const userRegistrationDetails: UserDetails = {
      index: (Math.random() + 1).toString(36).substring(7),
      name: this.userDetails.controls.name.value,
      surname: this.userDetails.controls.surname.value,
      email: this.userDetails.controls.email.value,
      tosAccepted: this.tosAccepted,
      selected: false
    };

    this.usersStore.createUser(userRegistrationDetails);
    this.router.navigate(["/overview"]);
  }
}
