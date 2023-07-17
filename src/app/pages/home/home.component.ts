import { Component } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public profesionales: Profesional[];

  constructor (public profesionalesService: ProfesionalesService, public router: Router){
    this.profesionales = null;
  }

  public mostrar (name: string, last_name: string){
      this.profesionalesService.getProfesionales(name, last_name).subscribe((data: Profesional[]) => {
        this.profesionales = data;
      }); 
  }

  public anyadir (name: string, last_name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string, photo: string){
    let profesional: Profesional = new Profesional(name, last_name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo);
    
    this.profesionalesService.postProfesionales(profesional).subscribe((data: Profesional[]) => {
      this.profesionales = data;
    }); 
  }

    public modificar (name: string, last_name: string, age: string, weight: string, height: string, isRetired: string, nationality: string, oscarsNumber: string, profession: string, photo: string){
      
      if (age != ''){var new_age = Number(age)}
      if (weight != ''){var new_weight = Number(weight)}
      if (height != ''){var new_height = Number(height)}
      if (isRetired != ''){var new_isRetired = Boolean(isRetired)}
      if (nationality != ''){var new_nationality = nationality}
      if (oscarsNumber != ''){var new_oscarsNumber = Number(oscarsNumber)}
      if (profession != ''){var new_profession = profession}
      if (photo != ''){var new_photo = photo}
      let profesional: Profesional = new Profesional(name, last_name, new_age, new_weight, new_height, new_isRetired, new_nationality, new_oscarsNumber, new_profession, new_photo);
      
      this.profesionalesService.putProfesionales(profesional).subscribe((data: Profesional[]) => {
        this.profesionales = data;
      }); 
  }

  public borrar (name: string, last_name: string){

    this.profesionalesService.deleteProfesionales(name, last_name).subscribe((data: Profesional[]) => {
      this.profesionales = data;
    }); 
}
}
