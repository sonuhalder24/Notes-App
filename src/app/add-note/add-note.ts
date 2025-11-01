import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../services/note.service';
import { Notes } from '../model/Notes';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css',
})
export class AddNote {
  
title!  : string;
desc!: string;


constructor(private route: Router,private noteSer:NoteService ) {}

  onSubmit(forms:any) {
    console.log('Method implemented. '+this.title+' : '+this.desc);

    const note:Notes={
        id:Date.now(),
        title:this.title,
        desc:this.desc
    }
      if(forms.valid) {
        this.noteSer.addNotes(note);
        this.route.navigate(['/allNotes']);
      }else{
        alert("Form is invalid");
      }
  }

}
