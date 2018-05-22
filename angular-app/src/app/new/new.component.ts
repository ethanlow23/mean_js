import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  petInfo = {name: '', type: '', description: '', skills: []};
  errors = [];
  ngOnInit() {
  }
  onCreate(){
    let add_pet = this._httpService.add_pet(this.petInfo);
    add_pet.subscribe(data => {
      console.log(data);
      if(data['message'] == 'success'){
        this.petInfo = {name: '', type: '', description: '', skills: []};
        this._router.navigate(['/']);
      }else{
        if(data['errors'].errors.name){
          this.errors.push(data['errors'].errors.name.message);
        }
        if(data['errors'].errors.type){
          this.errors.push(data['errors'].errors.type.message);
        }
        if(data['errors'].errors.description){
          this.errors.push(data['errors'].errors.description.message);
        }
      }
    })
  }
}
