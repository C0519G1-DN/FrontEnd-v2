export class ReqCommentPlaylist {
    playlists_id: number;
    users_id: number;
    comment: string;
    constructor(playlists_id: number, users_id: number, comment: string) {
        this.playlists_id = playlists_id;
        this.users_id = users_id;
        this.comment = comment;
    }
}