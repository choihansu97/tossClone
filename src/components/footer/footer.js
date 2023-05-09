class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <footer>
        <div>
          <section>
            <div>
              <strong>토스테크</strong>
              <ul>
                <li><a href="mailto:techblog@toss.im">의견 보내기</a></li>
              </ul>
            </div>
            
            <div>
              <strong>토스</strong>
              <ul>
                <li><a href="https://toss.im">홈페이지</a></li>
                <li><a href="https://team.toss.im">회사 소개</a></li>
                <li><a href="https://toss.im/career">채용</a></li>
              </ul>
            </div>
            
            <div>
              <strong>고객센터</strong>
              <ul>
                <li><a href="tel:1599-4905">전화: 1599-4905 (24시간 연중무휴)</a></li>
                <li><a href="mailto:support.toss.im">이메일: support@toss.im</a></li>
                <li><a href="https://goto.kakao.com/@toss">카카오톡: @toss</a></li>
              </ul>
            </div>
          </section>
          
          <adress>
            <strong>(주)비바리퍼블리카</strong>
            <small>Copyright © Viva Republica, Inc. All Rights Reserved.</small>
          </adress>
          
          <ul>
            <li>
              <a href="https://www.facebook.com/toss.revolution" target="_blank" >
                <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="Toss Facebook">
              </a>
            </li>
            
            <li>
              <a href="https://blog.toss.im" target="_blank">
               <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt="Toss blog">
              </a>
            </li>
            
            <li>
              <a aria-label="Toss Naver Post" target="_blank" href="https://post.naver.com/tossblog">
                <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="Toss Naver Post">
              </a>
            </li>
            
            <li>
              <a href="https://twitter.com/toss__official" target="_blank">
                <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="Toss Twitter">
              </a>
            </li>
            
            <li>
              <a href="https://www.instagram.com/toss.im/" target="_blank">
                <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="Toss Instagram">
              </a>
            </li>
          </ul>
        </div>
      </footer>
      `;
  }
}

customElements.define("app-footer", Footer);