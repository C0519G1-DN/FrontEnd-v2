export class likeSong {
    username: string;
    idSong: number;
    like: boolean;
    constructor(username: string, idSong: number, like: boolean) {
        this.username = username;
        this.idSong = idSong;
        this.like = like;
    }
}