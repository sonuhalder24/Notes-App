import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { NotesList } from "./notes-list/notes-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('note-app');
}
