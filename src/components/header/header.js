
class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
      <style>
        .header-container {
            max-width: 1140px;
            height: 60px;
            margin: 0 auto;
            border-bottom : 1px solid rgba(0,27,55,0.1);
        }
        
        .container-inner {
            display: flex;
            justify-content: space-between;
            align-content: center;
        }
        
        .position-list {
            display: flex;
            justify-content: space-between;
            align-content: center;
            list-style: none;
        }
        
        .content-position {
            padding: 0 8px;
        }
        
        .content-position > a {
           font-size: 1.5rem;
           text-decoration: none;
        }
        
        .content-position > button {
            background: #3182f6;
            font-size: 1.4rem;
        }
      </style>
      
      <header class="header-container">
        <div class="container-inner">
            <div class="logo-wrapper">
              <a href="/tech">
                <img src='../../assets/images/tossLogo.png' alt="토스 로고">
              </a>
            </div>
            
            <nav>
              <ul class="position-list">
                <li class="content-position"><a href="/design">디자인</a></li>
                <li class="content-position"><a href="/tech">개발</a></li>
                <li class="content-position"><button>채용 바로가기</button></li>
              </ul>
            </nav>
        </div>
      </header>
    `;
    }
}

customElements.define("app-header", Header);
