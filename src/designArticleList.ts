import { HttpClient } from "../http.js";
import AbstractView from "./abstractView";
import { DesignDto, EditorDto } from "./dto/designDto";
import * as articleUtils from "./articleUtils";

export default class DesignArticleList extends AbstractView {
  constructor() {
    super();
    this.setTitle("토스 기술 블로그, 토스테크 글 목록");
  }

  async setup() {
    const client = new HttpClient();
    const response = await client.get({path: "/api/design/articles"}) as articleUtils.RequestData ;

    const editorData = response.data.map((data: articleUtils.ResponseEditorData) =>
      new EditorDto({
        imageUrl: data.imageUrl,
        editorName: data.name,
        position: data.position,
        content: data.content
      })
    );

    const designArticleList = response.data.map((article: articleUtils.ResponseArticleList) =>
      new DesignDto({
        id: article.id,
        category: article.category,
        thumbnail: article.thumbnail,
        title: article.title,
        content: article.content,
        createDate: article.createDate,
        editor: editorData
      })
    );
    return designArticleList;
  }

  template(designArticleList: DesignDto[]): string {
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
