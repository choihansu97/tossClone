import alphaImage from "../../assets/images/alpha.png";

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-container">
        <div class="footer-inner">
          <section class="footer-career">
            <div class="footer-career-content">
                <img src='${alphaImage}' alt="alpha">
                <div class="footer-career-text">
                    <h3 class="footer-career-title">토스팀이 만드는 수많은 혁신의 순간들</h3>
                    <p>당신과 함께 만들고 싶습니다.</p>
                    <p>지금,토스팀에 합류하세요.</p>
                    <button>채용 중인 공고 보기</button>
                </div>
            </div>
          </section>
          
          <article class="footer-site-group-inner">
              <section class="footer-site-group-list">
                    <div class="footer-site-group">
                      <strong class="footer-site-group-title">토스테크</strong>
                      <ul class="footer-site-group-item">
                        <li><a href="mailto:techblog@toss.im">의견 보내기</a></li>
                      </ul>
                    </div>
                    
                    <div class="footer-site-group">
                      <strong class="footer-site-group-title">토스</strong>
                      <ul class="footer-site-group-item">
                        <li><a href="https://toss.im">홈페이지</a></li>
                        <li><a href="https://team.toss.im">회사 소개</a></li>
                        <li><a href="https://toss.im/career">채용</a></li>
                      </ul>
                    </div>
                    
                    <div class="footer-site-group">
                      <strong class="footer-site-group-title">고객센터</strong>
                      <ul class="footer-site-group-item">
                        <li><a href="tel:1599-4905">전화: 1599-4905 (24시간 연중무휴)</a></li>
                        <li><a href="mailto:support.toss.im">이메일: support@toss.im</a></li>
                        <li><a href="https://goto.kakao.com/@toss">카카오톡: @toss</a></li>
                      </ul>
                    </div>
              </section>
              
              <address class="footer-address">
                <strong class="footer-address-company-name">㈜비바리퍼블리카</strong>
                <small class="footer-copyright">Copyright © Viva Republica, Inc. All Rights Reserved.</small>
              </address>
              
              <ul class="footer-social-list">
                <li class="footer-social-item">
                  <a href="https://www.facebook.com/toss.revolution" target="_blank" >
                    <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="Toss Facebook">
                  </a>
                </li>
                
                <li class="footer-social-item">
                  <a href="https://blog.toss.im" target="_blank">
                   <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt="Toss blog">
                  </a>
                </li>
                
                <li class="footer-social-item">
                  <a aria-label="Toss Naver Post" target="_blank" href="https://post.naver.com/tossblog">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="Toss Naver Post">
                  </a>
                </li>
                
                <li class="footer-social-item">
                  <a href="https://twitter.com/toss__official" target="_blank">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="Toss Twitter">
                  </a>
                </li>
                
                <li class="footer-social-item">
                  <a href="https://www.instagram.com/toss.im/" target="_blank">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="Toss Instagram">
                  </a>
                </li>
              </ul>
          </article>
        </div>
      </footer>
      `;
  }
}

customElements.define("app-footer", Footer);
