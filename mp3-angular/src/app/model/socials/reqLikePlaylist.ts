export class ReqLikePlaylist {
    playlists_id: number;
    users_id: number;
    liked: boolean;
    constructor(idPlaylist: number, idUser: number, isLiked: boolean) {
        this.playlists_id = idPlaylist;
        this.users_id = idUser;
        this.liked = isLiked;
    }
}