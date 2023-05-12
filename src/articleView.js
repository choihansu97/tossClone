import {HttpClient} from "../http";
import AbstractView from "./abstractView";
import { ArticleDto } from "./dto/articleDto";

export default class extends AbstractView {
  url = "http://localhost:3000";

  constructor(id) {
    super();
    this.id = id;
  }

  async setup() {
    const client = new HttpClient({ baseUrl: this.url });
    const response = await client.get({ path: `/api/articles/:id`, requestParams: this.id });
    const articleView = new ArticleDto(
        response.data.id, response.data.category, response.data.thumbnail, response.data.title, response.data.content, response.data.createDate, response.data.editor.name, response.data.editor.position, response.data.editor.imageUrl, response.data.editor.content
    );

    document.title = articleView.title;
    return articleView;
  }

  template(articleView) {
    let articleHtml = `
      <div>
          <img src="${articleView.thumbnail}" alt="${articleView.title}">
          <h2>${articleView.title}</h2>
          <div>
            <img src="${articleView.editor.imageUrl}" alt="${articleView.title}">
            ${articleView.editor.name}
            ${articleView.editor.position}
            ${articleView.createDate}
          </div>
          <p>${articleView.editor.content}</p>
      </div>
    `;

    return `
    <main>
      ${articleHtml}
    </main>
  `;
  }

  async render(target) {
    const articleView = await this.setup();
    if (target) {
      target.innerHTML = `
        <app-header></app-header>
        ${this.template(articleView)}
        <app-footer></app-footer>`
    }
  }
}
