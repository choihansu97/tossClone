import alphaImage from "../../assets/images/alpha.png";

interface SiteLink {
    [key: string]: string;
}

interface SocialList {
    [key: string]: string;
}

class Footer extends HTMLElement {

    private SiteGroupLinks: Record<string, SiteLink[]> = {
        tech: [
            {url: "mailto:techblog@toss.im", text: "의견 보내기"}
        ],
        toss: [
            {url: "https://toss.im", text: "홈페이지"},
            {url: "https://team.toss.im", text: "회사 소개"},
            {url: "https://toss.im/career", text: "채용"}
        ],
        customer: [
            {url: "tel:1599-4905", text: "전화: 1599-4905 (24시간 연중무휴)"},
            {url: "mailto:support.toss.im", text: "이메일: support@toss.im"},
            {url: "https://goto.kakao.com/@toss", text: "카카오톡: @toss"}
        ]
    };

    private SocialData: SocialList[] = [
        {
            link: "https://www.facebook.com/toss.revolution",
            imageSrc:
                "https://static.toss.im/assets/homepage/safety/icn-facebook.svg",
            alt: "Toss Facebook"
        },
        {
            link: "https://blog.toss.im",
            imageSrc: "https://static.toss.im/assets/homepage/safety/icn-blog.svg",
            alt: "Toss blog"
        },
        {
            link: "https://post.naver.com/tossblog",
            imageSrc: "https://static.toss.im/assets/homepage/safety/icn-naver.svg",
            alt: "Toss Naver"
        },
        {
            link: "https://twitter.com/toss__official",
            imageSrc:
                "https://static.toss.im/assets/homepage/safety/icn-twitter.svg",
            alt: "Toss Twitter"
        },
        {
            link: "https://www.instagram.com/toss.im",
            imageSrc:
                "https://static.toss.im/assets/homepage/safety/icn-instagram.svg",
            alt: "Toss Instagram"
        }
    ];

    connectedCallback() {
        this.innerHTML = `
          <footer class="footer">
              <section class="footer__career">
                <div class="career__content">
                    <img src="${alphaImage}" alt="alpha">
                    <div class="footer__career__text">
                        <h3>토스팀이 만드는 수많은 혁신의 순간들</h3>
                        <p>당신과 함께 만들고 싶습니다.</p>
                        <p>지금,토스팀에 합류하세요.</p>
                        <button>채용 중인 공고 보기</button>
                    </div>
                </div>
              </section>
              
              <article class="footer__site-group">
                  <section class="site-group__list">
                    ${this._createSiteGroup("토스테크", this.SiteGroupLinks.tech).outerHTML}
                    ${this._createSiteGroup("토스", this.SiteGroupLinks.toss).outerHTML}
                    ${this._createSiteGroup("고객센터", this.SiteGroupLinks.customer).outerHTML}
                  </section>
                  
                  <address class="footer__address">
                    <strong class="address__company-name">㈜비바리퍼블리카</strong>
                    <small class="adress__copyright">Copyright © Viva Republica, Inc. All Rights Reserved.</small>
                  </address>
                  
                  <ul class="footer-social-list">${this._createSocialList()}</ul>
              </article>
          </footer>
      `;
    }

    _createSiteGroup(title: string, links: SiteLink[]): HTMLElement {
        const siteGroup = document.createElement("div");
        siteGroup.classList.add("site-group__list__item");

        const siteTitle = document.createElement("strong");
        siteTitle.classList.add("footer__site-group__title");
        siteTitle.textContent = title;

        const siteList = document.createElement("ul");
        siteList.classList.add("footer__site-group__item");

        links.forEach(link => {
            const siteLink = document.createElement("li");
            const linkTag = document.createElement("a");
            linkTag.href = link.url;
            linkTag.textContent = link.text;

            siteLink?.appendChild(linkTag);
            siteList?.appendChild(siteLink);
        });

        siteGroup?.appendChild(siteTitle);
        siteGroup?.appendChild(siteList);

        return siteGroup;
    }

    _createSocialList(): string {
        return this.SocialData.map((item) => {
            return `<li class="footer-social-item">
                <a href="${item.link}">
                    <img src="${item.imageSrc}" alt="${item.alt}">
                </a>
             </li>`;
        }).join("");
    }
}

customElements.define("app-footer", Footer);