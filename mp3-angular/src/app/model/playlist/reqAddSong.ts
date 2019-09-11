export class ReqAddSong{
    idPlaylist: number;
    idSong:number;
    constructor(idPlaylist: number, idSong: number){
        
        this.idPlaylist = idPlaylist;
       
        this.idSong = idSong;
    }
}