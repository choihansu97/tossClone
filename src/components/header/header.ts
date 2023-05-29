import headerImage from "../../assets/images/tossLogo.png";

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(): void {
        this.innerHTML = `          
          <header class="header-container">
            <div class="header-container__inner">
                <div class="header-container__logo">
                  <a href="/tech">
                    <img src='${headerImage}' alt="토스 로고">
                  </a>
                </div>
                
                 <div class="header-container__mobile-nav-button">
                    <button class="header-container__mobile-nav-dropdown-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="line-icon icon-on">
                            <path fill="#B0B8C1" d="M4.118 6.2h16a1.2 1.2 0 100-2.4h-16a1.2 1.2 0 100 2.4m16 4.6h-16a1.2 1.2 0 100 2.4h16a1.2 1.2 0 100-2.4m0 7h-16a1.2 1.2 0 100 2.4h16a1.2 1.2 0 100-2.4" fill-rule="evenodd"></path>
                        </svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="line-icon icon-close">
                            <path fill="#B0B8C1" fill-rule="evenodd" d="M13.815 12l5.651-5.651a1.2 1.2 0 00-1.697-1.698l-5.651 5.652-5.652-5.652a1.201 1.201 0 00-1.697 1.698L10.421 12l-5.652 5.651a1.202 1.202 0 00.849 2.049c.307 0 .614-.117.848-.351l5.652-5.652 5.651 5.652a1.198 1.198 0 001.697 0 1.2 1.2 0 000-1.698L13.815 12z"></path>
                        </svg>
                    </button>
                </div>
                    
                <nav class="header-container__position">                
                   <ul class="header-container__position-list">
                      <li class="header-container__position-list__content"><a href="/design">디자인</a></li>
                      <li class="header-container__position-list__content"><a href="/tech">개발</a></li>
                      <li class="header-container__position-list__content"><button>채용 바로가기</button></li>
                    </ul>
                </nav>
            </div>
          </header>
        `;

        const headerPosition = this.querySelector(".header-container") as HTMLElement;

        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                headerPosition?.classList.add("header-container__fixed");
            } else {
                headerPosition?.classList.remove("header-container__fixed");
            }
        });

        const menuToggleButton = this.querySelector(".header-container__mobile-nav-button") as HTMLElement;
        const menuContentList = this.querySelector(".header-container__position") as HTMLElement;
        const iconOn = this.querySelector('.icon-on') as HTMLElement;
        const iconClose = this.querySelector('.icon-close') as HTMLElement;

        const isMenuOpen: boolean = localStorage.getItem('isMenuOpen') === 'true';
        if (isMenuOpen) {
            menuContentList.classList.add('show-menu-list');
        }

        menuToggleButton.addEventListener("click", () => {
            menuContentList.classList.toggle("show-menu-list");

            if (menuContentList.classList.contains('show-menu-list')) {
                iconOn.style.display = 'none';
                iconClose.style.display = 'block'
            } else {
                iconOn.style.display = 'block';
                iconClose.style.display = 'none'
            }

            (localStorage as Storage).setItem('isMenuOpen', menuContentList.classList.contains('show-menu-list').toString());
        });
    }
}

customElements.define("app-header", Header);