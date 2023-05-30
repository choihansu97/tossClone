import AbstractView from "./core/abstractView";
import { HttpClient } from "../../utils/http";
import { ArticleDto, EditorDto } from "../../dto/articleDto";

export default class ArticleView extends AbstractView {
  public id: string | number;
  public category: string;

  constructor(id: string | number, category: string) {
    super();
    this.id = id;
    this.category = category;
  }

  async setup(): Promise<ArticleDto> {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const client = new HttpClient();

    const response: { data: any; error: any } = await client.get({
      path: `/api/${this.category}/articles/:id`,
      requestParams: this.id
    });

    if (response && response.data) {
      const editor = new EditorDto(
        response.data.editor.imageUrl,
        response.data.editor.editorName,
        response.data.editor.position,
        response.data.editor.content
      );

      const articleView = new ArticleDto(
        response.data.id,
        response.data.category,
        response.data.thumbnail,
        response.data.title,
        response.data.content,
        response.data.createDate,
        editor
      );
      articleView.validate();

      document.title = articleView.title;
      return articleView;
    } else {
      throw new Error("Failed to fetch article data.");
    }
  }

  template(articleView: ArticleDto) {
    let articleHtml = `
      <article class="article-view-inner">
          <img class= "article-view-inner__image" src="${articleView.thumbnail}" alt="${articleView.title}">

          <h2 class="article-view-inner__title">${articleView.title}</h2>
          
          <div class="article-author">
            <img class="article-author-image" src="${articleView.editor.imageUrl}" alt="${articleView.title}">
            
            <section class="article-view-inner__author-about">
              <div class="author-profile">
                <span class="author-profile__name">${articleView.editor.editorName}</span>
                <span class="author-profile__position">ㆍ${articleView.editor.position}</span>
              </div>
              
              <div class="article-view-inner__posted-date">${articleView.createDate}</div>
            </section>
          </div>
          
          <p class="article-view-inner__content">${articleView.editor.content}</p>
          
          <section class="article-view-inner__reaction">
            <h2 class="article-view-inner__reaction__title">재미있게 읽으셨나요?</h2>
            <p class="article-view-inner__reaction__sub-title">좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.</p>
            
            <div class="article-view__reaction-choice">
                <div class="article-view__reaction-happy"><a href="#">😍</a></div>
                <div class="article-view__reaction-not-bad"><a href="#">🤔</a></div>
            </div>
            
            <button class="article-view__reaction__link">아티클 공유하기</button>
          </section>
      </article>
    `;

    return `
            <article class="article-view-container">
              ${articleHtml}
            </article>
      `;
  }
}