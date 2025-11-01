import { Routes } from '@angular/router';
import { AboutNote } from './about-note/about-note';
import { AddNote } from './add-note/add-note';
import { NotesList } from './notes-list/notes-list';

export const routes: Routes = [
     {path:'', redirectTo:'allNotes', pathMatch:'full'},
  { path: 'allNotes', component: NotesList },
  { path: 'addNotes', component: AddNote  },
  { path: 'about', component: AboutNote},
];
