import headerImage from '../../assets/images/tossLogo.png'

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `          
          <header class="header-container">
            <div class="container-inner">
                <div class="logo-wrapper">
                  <a href="/tech">
                    <img src='${headerImage}' alt="토스 로고">
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
