import HttpClient from "../http";
import AbstractView from "./abstractView";
import { TechDto } from "./dto/techDto";

export default class extends AbstractView {
  url = "http://localhost:3000";

  constructor() {
    super();
    this.setTitle("토스 기술 블로그, 토스테크 글 목록");
  }

  async setup() {
    const client = new HttpClient({ baseUrl: this.url });
    const response = await client.get({ path: "/tech/articles" });
    const techArticleList = response.data.map(article => new TechDto(article.id, article.thumbnail, article.title, article.content, article.createDate));
    return techArticleList;
  }

  template(techArticleList) {
    let articleHtml = "";
    for (const article of techArticleList) {
      articleHtml += `
      <li>
        <a href="/article/${article.id}">
          <img src="${article.thumbnail}" alt="${article.title}">
          <div>
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <p>${article.createDate}</p>
          </div>
        </a>
      </li>
    `;
    }

    return `
    <main>
      <h1>개발</h1>
      <ul>
        ${articleHtml}
      </ul>
    </main>
  `;
  }

  async render(target) {
    const techArticleList = await this.setup();
    if (target) {
      target.innerHTML = await this.template(techArticleList);
    }
  }
}
