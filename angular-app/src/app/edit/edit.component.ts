import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editPet: {name: '', type: '', description: '', skills: ['']};
  pet: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getOnePet();
  }
  onEdit(pet){
    let edit = this._httpService.edit_pet(pet._id, this.editPet);
    edit.subscribe(data => {
      this._router.navigate(['/pets/' + pet._id]);
    })
  }
  getOnePet(){
    this._route.params.subscribe((params: Params) => {
      let pet = this._httpService.show_pet(params['id']);
      pet.subscribe(data => {
        console.log(data);
        this.pet = data['data'][0];
        this.editPet = {name: data['data'][0].name, type: data['data'][0].type, description: data['data'][0].description, skills: data['data'][0].skills};
      })
    })
  }
}
