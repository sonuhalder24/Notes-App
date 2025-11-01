import { Component, Input } from '@angular/core';
import { Notes } from '../model/Notes';
import { NoteService } from '../services/note.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-card',
  imports: [FormsModule,CommonModule],
  templateUrl: './notes-card.html',
  styleUrl: './notes-card.css',
})
export class NotesCard {

 @Input() note!:Notes;
editedTitle='';
editedDesc='';
  isEditing: boolean=false;

 constructor(private ntSer:NoteService) {}

 
  startEdit() {
    this.isEditing = true;
    this.editedTitle = this.note.title;
    this.editedDesc = this.note.desc;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  saveEdit() {
    const updatedNote: Notes = {
      ...this.note,
      title: this.editedTitle,
      desc: this.editedDesc
    };
    this.ntSer.updateNote(updatedNote);
    alert(this.note.title + ' updated successfully');
    this.isEditing = false;
  }
  
  deleteNote() {
    this.ntSer.deleteNotes(this.note);
    alert(this.note.title+' note deleted successfully');
  }
}
