export class EditorDto {
  constructor(imageUrl, name, position, content) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.position = position;
    this.content = content;
  }

  validate() {
    if (!this.name || !this.position || !this.imageUrl || !this.content) {
      throw new Error('Editor 정보가 유효하지 않습니다.');
    }
  }
}

export class DesignDto {
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
    this.editor.forEach(editor => editor.validate());
  }
}
