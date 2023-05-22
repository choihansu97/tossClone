declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

type EditorDto = {
  imageUrl: string,
  editorName: string,
  position: string,
  content: string,
}

type TechDto = {
  id: number,
  category: string,
  thumbnail: string,
  title: string,
  content: string,
  createDate: string,
  editor: EditorDto;
}

interface SiteLink {
  url: string,
  text: string
}

interface SocialData {
  link: string,
  imageSrc: string,
  alt: string
}