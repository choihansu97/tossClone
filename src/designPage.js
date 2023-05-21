import {HttpClient} from '../http';
import Component from './core/component';
import { TechDto, EditorDto } from "./dto/techDto";


export default class extends Component {

  constructor() {
    super();
    this.setTitle("토스 기술 블로그, 토스테크 글 목록");
  }

  template() {
      return `<div>테스트입니다.</div>`
  }
}