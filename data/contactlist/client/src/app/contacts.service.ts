import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Contact} from './contact';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  constructor(private http: Http) { }

  // Retrieving Contact Services
  getContacts() {
    return this.http.get('http://localhost:3000/api/contacts')
    // .map(res => res.json());
    .pipe(map(res => res.json()));
  }

  // Add contact method
  addContact(newContact) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact,{headers:headers})
    // .map(res => res.json());
    .pipe(map(res => res.json()));
  }

  // delete method
  deleteContact(id) {
    return this.http.delete('http://locahost:3000/api/contact'+id)
    // .map(res => res.json());
    .pipe(map(res => res.json()));
  }
}
