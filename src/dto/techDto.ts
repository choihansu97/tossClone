export class EditorDto {
    imageUrl: string;
    editorName: string;
    position: string;
    content: string;

    constructor(imageUrl: string, editorName: string, position: string, content: string) {
        this.imageUrl = imageUrl;
        this.editorName = editorName;
        this.position = position;
        this.content = content;
    }

    validate(): void {
        if (!this.editorName || !this.position || !this.imageUrl || !this.content) {
            throw new Error("Editor 정보가 유효하지 않습니다.");
        }
    }
}

export class TechDto {
    id: string;
    category: string;
    thumbnail: string;
    title: string;
    content: string;
    createDate: string;
    editor: EditorDto[];

    constructor(
        id: string,
        category: string,
        thumbnail: string,
        title: string,
        content: string,
        createDate: string,
        editor: EditorDto[]
    ) {
        this.id = id;
        this.category = category;
        this.thumbnail = thumbnail;
        this.title = title;
        this.content = content;
        this.createDate = createDate;
        this.editor = editor;

        this.validate();
    }

    validate(): void {
        this.editor.forEach((editor) => editor.validate());
    }
}