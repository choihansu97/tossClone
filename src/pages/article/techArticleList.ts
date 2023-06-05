import {HttpClient} from "../../utils/http.js";
import AbstractView from "./core/abstractView";
import {TechDto, EditorDto} from "../../dto/techDto";
import { Skeleton } from "../../skeleton";

export default class TechArticleList extends AbstractView {
    isLoading:boolean;

    constructor() {
        super();
        this.setTitle("토스 기술 블로그, 토스테크 글 목록");
        this.isLoading = false;
    }

    async setup(): Promise<TechDto[]> {
        this.isLoading = true;

        const client = new HttpClient();
        const response: { data: any; error: any } = await client.get({path: "/api/tech/articles"});

        if (response && Array.isArray(response.data)) {
            this.isLoading = false;
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
        if (this.isLoading === true) {
            const skeleton = new Skeleton();
            return skeleton.template();
        }

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
}