class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <header>
        <div>
          <a href="/tech">
            <img src='./tossLogo.png' alt="토스 로고">
          </a>
        </div>
        
        <nav>
          <ul>
            <li><a href="/design">디자인</a></li>
            <li><a href="/tech">개발</a></li>
            <li><button>채용 바로가기</button></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("app-header", Header);