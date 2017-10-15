import {h, Component} from 'preact';

export default class Header extends Component {

  handleClickMenu() {
    this.props.onClikMenu();
  }

  handleClickAbout() {
    this.props.onClickAbout();
  }

  render() {
    return (
      <header class="l-header flex flex-column flex-center font-style-title m-y-l">
        <div>
          <h1 class="header-title m-0 m-b-m">Hacker Koans</h1>
          <p class="header-lead m-0 m-b-m">Find the bible <br />for learning <br />programming languages.<span class="header-cursor fade-in-out-loop"></span></p>
          <button onClick={this.handleClickMenu.bind(this)} type="button" class="reset-button">
            <i class="fa fa-angle-double-right m-r" aria-hidden="true"></i>SELECT LANGUAGE</button>
          <button onClick={this.handleClickAbout.bind(this)} type="button" class="reset-button">
            <i class="fa fa-question m-r" aria-hidden="true"></i>ABOUT</button>
        </div>
      </header>
    );
  }
}
