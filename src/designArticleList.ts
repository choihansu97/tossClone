import { HttpClient } from "../http.js";
import AbstractView from "./abstractView";
import { DesignDto, EditorDto } from "./dto/designDto";

export default class DesignArticleList extends AbstractView {
  constructor() {
    super();
    this.setTitle("토스 기술 블로그, 토스테크 글 목록");
  }

  async setup() {
    const client = new HttpClient();
    const response = await client.get({
      path: "/api/design/articles"
    });

    const editorData = response.data.map(
        (data) =>
            new EditorDto(
                data.editor.imageUrl,
                data.editor.name,
                data.editor.position,
                data.editor.content
            )
    );

    const designArticleList = response.data.map(
        (article) =>
            new DesignDto(
                article.id,
                article.category,
                article.thumbnail,
                article.title,
                article.content,
                article.createDate,
                editorData
            )
    );
    return designArticleList;
  }

  template(designArticleList) {
    let articleHtml = "";
    for (const article of designArticleList) {
      articleHtml += `
        <li class="article-list__item">
          <a class="article-list__link" href="/design/article/${article.id}">
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
          <h1 class="article-list-inner__title">디자인</h1>
          <ul class="article-list">
            ${articleHtml}
          </ul>
        </div>
      </article>
      `;
  }
}
