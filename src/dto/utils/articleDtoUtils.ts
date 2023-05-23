// export type EditorType = {
//     imageUrl: string;
//     editorName: string;
//     position: string;
//     content: string;
// }
//
// export type ArticleType = {
//     id: string | number;
//     category: string;
//     thumbnail: string
//     title: string;
//     content: string;
//     createDate: string;
//     editor: EditorType;
// }
//
// export function handleData(
//     id: number,
//     category: string,
//     thumbnail: string,
//     title: string,
//     content: string,
//     createDate: Date,
//     editor: EditorDto
// ) {
//     this.id = id;
//     this.category = category;
//     this.thumbnail = thumbnail;
//     this.title = title;
//     this.content = content;
//     this.createDate = createDate;
//     this.editor = new EditorDto(editor);
//
//     this.validate();
// }