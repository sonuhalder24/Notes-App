import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesCard } from "../notes-card/notes-card";
import { NoteService } from '../services/note.service';
import { Notes } from '../model/Notes';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';
import { FilterPipe } from "../filters/filter-pipe";
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-notes-list',
  imports: [NotesCard, CommonModule, FormsModule, FilterPipe],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.css',
})
export class NotesList implements OnInit,OnDestroy {

  notes: Notes[]=[];
  searchText: string = '';
  private searchSubject = new Subject<string>();
  private subscription!: Subscription;

  constructor(private note:NoteService) {}
  ngOnInit(): void {
    this.notes =this.note.getNotes();

    // Debounce logic — wait 300ms after user stops typing
    this.subscription = this.searchSubject
      .pipe(
        debounceTime(300),           // ⏳ waits 300ms
        distinctUntilChanged()       // avoids repeats of same text
      )
      .subscribe(text => (this.searchText = text));
  }

  // Called when user types
  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
  
}