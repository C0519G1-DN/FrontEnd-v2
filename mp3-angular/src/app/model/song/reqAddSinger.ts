export class ReqAddSinger {
    idSinger: number;
    idSong: number;
    constructor(idSinger: number, idSong: number) {
        this.idSong = idSong;
        this.idSinger = idSinger;
    }
}
