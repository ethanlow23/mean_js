import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  pets = [];

  ngOnInit() {
    this.get_pets();
  }
  get_pets(){
    let pets = this._httpService.all_pets();
    pets.subscribe(data => {
      console.log(data);
      this.pets = data['data'];
    })
  }
  goShowPet(pet){
    this._router.navigate(['/pets/' + pet._id]);
  }
  goEditPet(pet){
    this._router.navigate(['/pets/' + pet._id + '/edit'])
  }
}
