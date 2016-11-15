import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {ContactsDetailComponent} from './contacts-detail/contacts-detail.component';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';
import {Route} from '@angular/router';

export const ContactsAppRoutes:Route[] = [
    {path: '', component: ContactsListComponent},
    {path: 'contact/:id', component: ContactsDetailComponent},
    {path: 'contact/:id/edit', component: ContactsEditorComponent}
];