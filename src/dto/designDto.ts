type EditorType = {
  imageUrl: string;
  editorName: string;
  position: string;
  content: string;
}

type ArticleListType = {
  id: number | string;
  category: string;
  thumbnail: string
  title: string;
  content: string;
  createDate: string;
  editor: EditorType;
}

export class EditorDto {
  imageUrl: string;
  editorName: string;
  position: string;
  content: string;

  constructor(editorDto: EditorType) {
    const { imageUrl, editorName, position, content } = editorDto;
    this.imageUrl = imageUrl;
    this.editorName = editorName;
    this.position = position;
    this.content = content;

    this.validate();
  }

  validate() {
    if (!this.editorName || !this.position || !this.imageUrl || !this.content) {
      throw new Error("Editor 정보가 유효하지 않습니다.");
    }
  }
}

export class DesignDto {
  id: number | string;
  category: string;
  thumbnail: string;
  title: string;
  content: string;
  createDate: string;
  editor: EditorDto[];

  constructor(designDto: ArticleListType) {
    const { id, category, thumbnail, title, content, createDate, editor } = designDto;
    this.id = id;
    this.category = category;
    this.thumbnail = thumbnail;
    this.title = title;
    this.content = content;
    this.createDate = createDate;
    this.editor = [new EditorDto(editor)];

    this.validate();
  }

  validate(): void {
    this.editor.forEach((editor: EditorDto) => editor.validate() as void);
  }
}
