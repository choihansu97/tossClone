export class ArticleDto {
    constructor(id, category, thumbnail, title, content, createDate, editorName, editorPosition, editorImageUrl, editorEmail) {
        this.id = id;
        this.category = category;
        this.thumbnail = thumbnail;
        this.title = title;
        this.content = content;
        this.createDate = createDate;
        this.editor = {
            name: editorName,
            position: editorPosition,
            imageUrl: editorImageUrl,
            email: editorEmail,
        };
    }
}
