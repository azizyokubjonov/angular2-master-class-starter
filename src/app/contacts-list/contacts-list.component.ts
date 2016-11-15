import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact'; 
import {CONTACT_DATA} from '../data/contact-data';
import {ContactsService} from '../contacts.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent{
  contacts: Observable<Array<Contact>>;
  constructor (private contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }
}