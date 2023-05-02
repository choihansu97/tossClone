export class ArticleDto {
    constructor(id, thumbnail, title, content, createDate) {
        this.id = id;
        this.thumbnail = thumbnail;
        this.title = title;
        this.content = content;
        this.createDate = createDate;
    }
}