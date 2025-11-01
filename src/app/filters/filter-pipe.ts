import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(notes: any[], searchText: string): any[] {
    if (!notes || !searchText) return notes;

    const words = searchText.toLowerCase().split(' ').filter(w => w);

    return notes.filter(note => {
      const text = (note.title + ' ' + note.desc).toLowerCase();
      return words.every(word => text.includes(word));
    });
  }

}
