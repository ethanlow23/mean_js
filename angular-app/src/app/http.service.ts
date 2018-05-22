import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  all_pets(){
    return this._http.get('/index');
  }
  add_pet(addPet){
    return this._http.post('/create', addPet);
  }
  show_pet(id){
    return this._http.get('/show/' + id);
  }
  edit_pet(id, editPet){
    return this._http.put('/edit/' + id, editPet);
  }
  destroy_pet(id){
    return this._http.delete('/destroy/' + id);
  }
}
