import AbstractView from "./core/abstractView";
import { HttpClient } from "../../utils/http.js";
import { TechDto, EditorDto } from "../../dto/techDto";

export default class TechArticleList extends AbstractView {
  constructor() {
    super();
    this.setTitle("토스 기술 블로그, 토스테크 글 목록");
  }

  async setup(): Promise<TechDto[]> {
    const client = new HttpClient();
    const response: { data: any; error: any } = await client.get({ path: "/api/tech/articles" });

    if (response && Array.isArray(response.data)) {
      const editorData = response.data.map((data: any) =>
        new EditorDto(
          data.editor.imageUrl,
          data.editor.editorName,
          data.editor.position,
          data.editor.content
        )
      );

      const techArticleList = response.data.map((article: any) =>
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
    return [];
  }

  template(techArticleList: TechDto[]): string {
    const articleHtml = techArticleList.map((article) => `
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
        `).join("");

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
}