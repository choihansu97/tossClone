declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";


interface SiteLink {
    url: string,
    text: string
}

interface SocialData {
    link: string,
    imageSrc: string,
    alt: string
}