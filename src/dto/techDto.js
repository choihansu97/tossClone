export class EditorDto {
    constructor(name, position, imageUrl, content) {
        this.name = name;
        this.position = position;
        this.imageUrl = imageUrl;
        this.content = content;
    }

    validate() {
        if (!this.name || !this.position || !this.imageUrl || !this.content) {
            throw new Error('Editor 정보가 유효하지 않습니다.');
        }
    }
}

export class TechDto {
    constructor(id, category, thumbnail, title, content, createDate, editor) {
        this.id = id;
        this.category = category;
        this.thumbnail = thumbnail;
        this.title = title;
        this.content = content;
        this.createDate = createDate;
        this.editor = editor;

        this.validate();
    }

    validate() {
        this.editor.validate();
    }
}
