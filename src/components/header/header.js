import headerImage from "../../assets/images/tossLogo.png";

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
                    <button class="mobile-nav-dropdown-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="line-icon icon-on">
                            <path fill="#B0B8C1" d="M4.118 6.2h16a1.2 1.2 0 100-2.4h-16a1.2 1.2 0 100 2.4m16 4.6h-16a1.2 1.2 0 100 2.4h16a1.2 1.2 0 100-2.4m0 7h-16a1.2 1.2 0 100 2.4h16a1.2 1.2 0 100-2.4" fill-rule="evenodd"></path>
                        </svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="line-icon icon-close">
                            <path fill="#B0B8C1" fill-rule="evenodd" d="M13.815 12l5.651-5.651a1.2 1.2 0 00-1.697-1.698l-5.651 5.652-5.652-5.652a1.201 1.201 0 00-1.697 1.698L10.421 12l-5.652 5.651a1.202 1.202 0 00.849 2.049c.307 0 .614-.117.848-.351l5.652-5.652 5.651 5.652a1.198 1.198 0 001.697 0 1.2 1.2 0 000-1.698L13.815 12z"></path>
                        </svg>
                    </button>
                </div>
                    
                <nav class="header-position-wrapper">                
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