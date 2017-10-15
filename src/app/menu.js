import {h, Component} from 'preact';

const LANGUAGES = {
  'C': 'c',
  'C++': 'cplusplus',
  'C#': 'csharp',
  'Go': 'go',
  'Java': 'java',
  'JavaScript': 'javascript',
  'PHP': 'php',
  'Python': 'python',
  'Ruby': 'ruby',
  'Swift': 'swift',
  'TypeScript': 'typescript'
};

export default class Menu extends Component {

  handleSelect(language) {
    this.props.onSelect(language);
  }

  render() {
    return (
      <nav class="menu">
        <ul class="m-0 flex flex-wrap">
          {Object.entries(LANGUAGES).map(([key, value]) => (
            <li class="menu-item flex flex-column" onClick={this.handleSelect.bind(this, [value])}>
              <i class={`devicon-${value}-plain`}></i>
              <span class="menu-name">{key}</span>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
