import { HttpClient } from "../http";
import AbstractView from "./abstractView";
import { TechDto, EditorDto } from "./dto/techDto";

const API_BASE_URL = "http://localhost:3000";

export default class extends AbstractView {
  url = "http://localhost:3000";

  constructor() {
    super();
    this.setTitle("토스 기술 블로그, 토스테크 글 목록");
  }

  async setup() {
    const client = new HttpClient({ baseUrl: API_BASE_URL });
    const response = await client.get({ path: "/api/tech/articles" });

    const editorData = response.data.map(
      (data) =>
        new EditorDto(
          data.editor.imageUrl,
          data.editor.name,
          data.editor.position,
          data.editor.content
        )
    );

    const techArticleList = response.data.map(
      (article) =>
        new TechDto(
          article.id,
          article.category,
          article.thumbnail,
          article.title,
          article.content,
          article.createDate,
          editorData
        )
    );

    return techArticleList;
  }

  template(techArticleList) {
    let articleHtml = "";
    for (const article of techArticleList) {
      articleHtml += `
        <li class="article-list__item">
          <a class="article-list__link" href="/tech/article/${article.id}">
            <img class="article-list__thumbnail" src="${article.thumbnail}" alt="${article.title}">
            <div class="article-list-content">
              <h2 class="article-list-content__title">${article.title}</h2>
              <p class="article-list-content__text">${article.content}</p>
              <p class="article-list-content__date">${article.createDate}</p>
            </div>
          </a>
        </li>
    `;
    }

    return `
      <article class="article-list-container">
        <div class="article-list-inner">
          <h1 class="article-list-inner__title">개발</h1>
          <ul class="article-list">
            ${articleHtml}
          </ul>
         </div>
        </article>
      `;
  }

  async render(target) {
    const techArticleList = await this.setup();
    if (target) {
      target.innerHTML = `${this.template(techArticleList)}`;
    }
  }
}
