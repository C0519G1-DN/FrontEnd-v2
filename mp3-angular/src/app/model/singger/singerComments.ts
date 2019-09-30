export class SingerComment {
    comment: string;
    idUser: number;
    idSinger: number;

    constructor(idSinger: number, idUser: number, comment: string) {
        this.idUser = idUser;
        this.idSinger = idSinger;
        this.comment = comment;
    }
}
