import { Injectable } from "@angular/core";
import { Notes } from "../model/Notes";

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    private notes:Notes[]=[];

    constructor() {
        const data = localStorage.getItem('note');
        if (data) {
            this.notes = JSON.parse(data);
        }
    }

    getNotes():Notes[]{
        return this.notes;
    }
    addNotes(note:Notes){
        this.notes.push(note);
        this.saveData();
    }
    deleteNotes(note:Notes){
        //this.notes=this.notes.filter(n=>n!=note);
        const index=this.notes.indexOf(note);
        this.notes.splice(index,1);
        this.saveData();
    }
     /** ✅ Edit existing note */
  updateNote(updatedNote: Notes) {
    const index = this.notes.findIndex(n => n.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.saveData();
    }
  }

    private saveData(){  
        localStorage.setItem('note',JSON.stringify(this.notes));
    }
}