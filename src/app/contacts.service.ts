import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data'
import {Contact} from './models/contact';
import {Http} from '@angular/http';

@Injectable()
export class ContactsService {
  private contacts: Contact[] = CONTACT_DATA;
  API_ENDPOINT = 'http://localhost:4201';

  constructor( private http: Http) {

  }
  getContacts() {
    return this.http.get(this.API_ENDPOINT + '/api/contacts')
    .map(res => res.json())
    .map(data => data.items);
  }
  getContact(id:string){
    return this.http.get(this.API_ENDPOINT + '/api/contacts/'+id)
    .map(res => res.json())
    .map(data => data.item);
  }
  updateContact(contact: Contact){
    return this.http.put(`${this.API_ENDPOINT}/api/contacts/${contact.id}`, contact);
  }
}
