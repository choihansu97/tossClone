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
                
                <div class="mobile-nav-button">
                    <button class="mobile-nav-dropdown-toggle" aria-expanded="false" aria-controls="header-poistion-wrapper">
                    버튼입니다.
                    </button>
                </div>
                
                <nav aria-describedby="header-poistion-wrapper">
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

    //TODO 헤더 스크롤 시 고정
    static get observedAttributes() {
        const headerPosition = document.querySelector('.header-container');
        const scrollThreshold = 50;

        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 0) {
                headerPosition.classList.add('header-container-fixed')
            } else {
                headerPosition.classList.remove('header-container-fixed')
            }
        })
    }
}

customElements.define("app-header", Header);
