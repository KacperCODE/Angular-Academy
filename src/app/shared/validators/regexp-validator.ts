import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const EMAIL_PATTERN = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';

export function regexpValidator(pattern: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;
      const regExp = new RegExp(pattern);
  
      if (value) {
        return regExp.test(value.trim()) ? null : { pattern: true };
      }
  
      return null;
    };
  }
  