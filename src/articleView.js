import {HttpClient} from "../http";
import AbstractView from "./abstractView";
import {ArticleDto, EditorDto} from "./dto/articleDto";

export default class extends AbstractView {
    constructor(id, category) {
        super();
        this.id = id;
        this.category = category;
    }

    async setup() {
        window.scrollTo(0, 0);
        const client = new HttpClient();

        try {
            const response = await client.get({
                path: `/api/${this.category}/articles/:id`,
                requestParams: this.id
            });

            const editor = new EditorDto(
                response.data.editor.imageUrl,
                response.data.editor.name,
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
        } catch (error) {
            console.log(error);
        }
    }

    template(articleView) {
        let articleHtml = `
      <article class="article-view-inner">
          <img class= "article-view-inner__image" src="${articleView.thumbnail}" alt="${articleView.title}">

          <h2 class="article-view-inner__title">${articleView.title}</h2>
          
          <div class="article-author">
            <img class="article-author-image" src="${articleView.editor.imageUrl}" alt="${articleView.title}">
            
            <section class="article-view-inner__author-about">
              <div class="author-profile">
                <span class="author-profile__name">${articleView.editor.name}</span>
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