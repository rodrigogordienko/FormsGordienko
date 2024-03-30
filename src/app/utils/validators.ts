import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const noHomeroValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  console.log(control);

  if (
    typeof control.value === 'string' &&
    control.value.toLowerCase().includes('homero')
  ) {
    return {
      noHomero: true,
    };
  }

  return null; // Si el retorno es null, significaria que el campo NO TIENE errores, (es valido);
};
