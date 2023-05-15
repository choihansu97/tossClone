import {HttpClient} from "../http";
import AbstractView from "./abstractView";
import {TechDto, EditorDto} from "./dto/techDto";

const API_BASE_URL = "http://localhost:3000";

export default class extends AbstractView {
    url = "http://localhost:3000";

    constructor() {
        super();
        this.setTitle("토스 기술 블로그, 토스테크 글 목록");
    }

    async setup() {
        const client = new HttpClient({baseUrl: API_BASE_URL});
        const response = await client.get({path: "/api/tech/articles"});

        const editorData = response.data.map(
            (data) =>
                new EditorDto(
                    data.editor.imageUrl,
                    data.editor.name,
                    data.editor.position,
                    data.editor.content
                )
        )

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
      <li class="article-list-item">
        <a class='article-list-item-target' href="/tech/article/${article.id}">
          <img class='article-image' src="${article.thumbnail}" alt="${article.title}">
          <div class="article-list-item-detail">
            <h2 class="article-item-title">${article.title}</h2>
            <p class="article-item-detail">${article.content}</p>
            <p class="article-item-date">${article.createDate}</p>
          </div>
        </a>
      </li>
    `;
        }

        return `
    <main class="main-article-container">
      <div class="main-article-wrapper">
        <h1 class="main-article-header-title">개발</h1>
        <ul class="main-article-list">
          ${articleHtml}
        </ul>
      </div>
    </main>
  `;
    }

    async render(target) {
        const techArticleList = await this.setup();
        if (target) {
            target.innerHTML = `
      <app-header></app-header>
      ${this.template(techArticleList)}
      <app-footer></app-footer>
    `;
        }
    }
}
