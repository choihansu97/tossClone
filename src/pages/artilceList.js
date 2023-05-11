class ArticleList extends HTMLElement {
    constructor() {
        super();
    }

    set articles(value) {
        this._articles = value;
        this.render();
    }

    render() {
        let articleHtml = "";
        for (const article of this._articles) {
            articleHtml += `
        <li>
          <a href="/article/${article.id}">
            <img src="${article.thumbnail}" alt="${article.title}">
            <div>
              <h2>${article.title}</h2>
              <p>${article.content}</p>
              <p>${article.createDate}</p>
            </div>
          </a>
        </li>
      `;
        }

        this.innerHTML = `
      <div>
        <h1>개발</h1>
        <ul>
          ${articleHtml}
        </ul>
      </div>
    `;
    }
}