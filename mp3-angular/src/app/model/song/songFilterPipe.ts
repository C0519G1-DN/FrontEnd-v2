import { PipeTransform, Pipe } from '@angular/core';
import { Songs } from './songs';

@Pipe({
    name: 'songFilter'
})
export class SongFilterPipe implements PipeTransform {
    transform(songs: Songs[], search: string){

        if(!songs || !search){
            return songs
        }
        return songs.filter(song => 
            song.name.includes(search));

            // if(!songs || !search){
            //     return songs
            // }
            // return songs.filter(song => 
            //     song.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
}