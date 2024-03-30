import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
}
from '@angular/forms';
import Swal from 'sweetalert2';
import { noHomeroValidator } from '../../utils/validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
    /**
     * Entidades que manipulan los formularios de Angular
     *
     * FormGroup - Agrupar otros controles y definir un objeto
     * FormControl - Manipula el valor de los campos (inputs, selects, checkboxs, textarea)
     * FormArray - Manejar arrays de otros controles
     *
     * Modelo de formulario
     * {
     *    name: 'Matias',
     *    lastName: 'Gonzales',
     *    email: 'mati@mail.com',
     * }
     *
     */
  
    // loginForm = this.formBuilder.group({})
  
    // userForm: FormGroup;
  
    userForm = this.formBuilder.group({
      // name: this.formBuilder.control(''),
      name: ['', [noHomeroValidator]],
      lastName: this.formBuilder.control(''),
      email: this.formBuilder.control('', [
        // Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
        Validators.required,
      ]),
      contrasena: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  
    // SIN FORM BUILDER
    // userForm = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl()
    // })
  
    get emailControl() {
      return this.userForm.get('email');
    }
  
    get contrasenaControl() {
      return this.userForm.get('contrasena');
    }
  
    get nameControl() {
      return this.userForm.get('name');
    }

    get telefonoControl() {
      return this.userForm.get('telefono');
    }
  
    constructor(private formBuilder: FormBuilder) {
      // this.userForm = this.formBuilder.group({
      //   // name: this.formBuilder.control(''),
      //   name: [''],
      //   lastName: this.formBuilder.control(''),
      //   email: this.formBuilder.control(''),
      // });
    }
  
    onSubmit(): void {
      // alert('Usuario creado' + JSON.stringify(this.userForm.value));
      Swal.fire({
        icon: 'success',
        title: 'Realizado',
        text: 'Usuario registrado',
      });
    }
}
