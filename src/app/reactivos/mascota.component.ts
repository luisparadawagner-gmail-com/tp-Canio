import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
    selector : 'app-mascota',
    templateUrl: './mascota.component.html',
})

export class MascotaComponent{
    
    constructor(private fb: FormBuilder){}

    nombreControl = new FormControl('mascota');


    mascotaForm = this.fb.group({
        raza : ['Pitbull'],
        nombre : ['', Validators.required],
        edad : [''],
        direccion : this.fb.group({
            calle : [''],
            numero : ['']
        }),
        contactos: this.fb.array([this.fb.control('') ])
        
    });

    get contactos(){
        return this.mascotaForm.get('contactos') as FormArray;
    }

    agregarContacto(){
        this.contactos.push(this.fb.control(''));
    }

    submit(){
        debugger;
        this.mascotaForm.value;

        this.mascotaForm.setValue({
            raza: 'caniche',
            nombre: 'Canio',
            edad: 3,
            direccion: {
                 calle: 'BuenaVista',
                 numero: 35
            },
          contactos : ['']
        });

        this.mascotaForm.patchValue({ edad : 60 });

    }

}