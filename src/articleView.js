import {HttpClient} from "../http";
import AbstractView from "./abstractView";
import {ArticleDto, EditorDto} from "./dto/articleDto";

const API_BASE_URL = "http://localhost:3000";

export default class extends AbstractView {
    constructor(id, category) {
        super();
        this.id = id;
        this.category = category;
    }

    async setup() {
        window.scrollTo(0, 0);
        const client = new HttpClient({baseUrl: API_BASE_URL});

        try {
            const response = await client.get({
                path: `/api/${this.category}/articles/:id`,
                requestParams: this.id,
            });

            const editor = new EditorDto(
                response.data.editor.imageUrl,
                response.data.editor.name,
                response.data.editor.position,
                response.data.editor.content
            )

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
            location.href = `${API_BASE_URL}/404`;
        }
    }

    template(articleView) {
        let articleHtml = `
      <div class="article-view-inner">
          <img class= "article-view-image" src="${articleView.thumbnail}" alt="${articleView.title}">

          <h2 class="article-view-title">${articleView.title}</h2>
          
          <div class="article-view-author">
            <img class="article-view-author-image" src="${articleView.editor.imageUrl}" alt="${articleView.title}">
            
            <section class="article-view-author-about">
              <div class="article-author-about-profile">
                <span class="article-author-about-name">${articleView.editor.name}</span>
                <span class="article-author-about-position">ㆍ${articleView.editor.position}</span>
              </div>
              
              <div class="article-posted-date">${articleView.createDate}</div>
            </section>
          </div>
          
          <p class="article-view-content">${articleView.editor.content}</p>
          
          <section class="article-view-reaction">
            <h2 class="article-view-reaction-title">재미있게 읽으셨나요?</h2>
            <p class="article-view-reaction-sub-title">좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.</p>
            
            <div class="article-view-reaction-choice">
                <div class="article-reaction-happy"><a href="#">😍</a></div>
                <div class="article-reaction-not-bad"><a href="#">🤔</a></div>
            </div>
            
            <button class="article-view-link">아티클 공유하기</button>
          </section>
      </div>
    `;

        return `
            <article class="article-view-container">
              ${articleHtml}
            </article>
      `;
    }

    async render(target) {
        const articleView = await this.setup();

        const main = document.createElement('main');
        main.innerHTML = `${this.template(articleView)}`;
        target.appendChild(main);
    }
}
