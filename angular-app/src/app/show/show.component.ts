import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  pet: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getOnePet();
  }
  getOnePet(){
    this._route.params.subscribe((params: Params) => {
      let pet = this._httpService.show_pet(params['id']);
      pet.subscribe(data => {
        console.log(data);
        this.pet = data['data'][0];
      })
    })
  }
  onDestroy(pet){
    let destroy = this._httpService.destroy_pet(pet._id);
    destroy.subscribe(data => {
      console.log(data);
      this._router.navigate(['/pets']);
    })
  }
}
