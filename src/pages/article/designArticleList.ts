import AbstractView from "./core/abstractView";
import {HttpClient} from "../../utils/http";
import {DesignDto, EditorDto} from "../../dto/designDto";

export default class DesignArticleList extends AbstractView {
    constructor() {
        super();
        this.setTitle("토스 기술 블로그, 토스테크 글 목록");
    }

    protected async setup(): Promise<DesignDto[]> {
        const client = new HttpClient();
        const response = await client.request({
            path: `/api/design/articles/`,
            method: 'GET',
        });

        if (response && Array.isArray(response.data)) {
            const designArticleList = response.data.map((article: any) => {
                const editorData = new EditorDto(
                    article.editor.imageUrl,
                    article.editor.editorName,
                    article.editor.position,
                    article.editor.content
                );

                return new DesignDto(
                    article.id,
                    article.category,
                    article.thumbnail,
                    article.title,
                    article.content,
                    article.createDate,
                    [editorData]
                );
            });
            return designArticleList;
        }
        return [];
    }

    protected template(designArticleList: DesignDto[]): string {
        const articleHtml = designArticleList
            .map(
                (article) => `
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
                `).join("");

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