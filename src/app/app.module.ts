import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//añadir
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { AltaAlumnosComponent} from './alta-alumnos/alta-alumnos.component';
import { PersonaComponent } from './reactivos/persona.component';
import { MascotaComponent } from './reactivos/mascota.component';


//no hace falta implementarlos
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';;


@NgModule({
  declarations: [ AppComponent, PersonaComponent, MascotaComponent ],
  imports: [BrowserModule,AppRoutingModule, FormsModule, ReactiveFormsModule,
    //angular material
    MatInputModule,
    MatButtonModule, BrowserAnimationsModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
