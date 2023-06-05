import AbstractView from "./pages/article/core/abstractView";
import "./assets/styles/skeleton.css";

export class Skeleton extends AbstractView {

  template(): string {
    return `
      <li class="skeleton__item">
          <div class="skeleton__img skeleton-gradient">
           <div class="skeleton-list">
              <h2 class="skeleton-list__title skeleton-gradient"/>
              <p class="skeleton-list__text skeleton-gradient"/>
              <p class="skeleton-list__date skeleton-gradient"/>
            </div>
      </li>
      `;
  }
}

