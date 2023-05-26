export type RequestData = {
  path: string;
  requestParams?: string | number | undefined;
  [key: string]: any;
};

export type ResponseEditorData = {
  imageUrl: string;
  editorName: string;
  position: string;
  content: string;
}

export type ResponseArticleList = {
  id: string | number;
  category: string;
  thumbnail: string;
  title: string;
  content: string;
  createDate: string;
  editorData:  ResponseEditorData
}