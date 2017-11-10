import {h, Component} from 'preact';
import RepositoryClient from './client';
import Menu from './menu';
import Item from './item';
import Header from './header';
import Modal from './modal';
import Loading from './loading';

export default class App extends Component {
  constructor() {
    super();
    this.setState({items: null, menuOpen: false, aboutOpen: false});
  }

  loadItems(language) {
    RepositoryClient.search(language).then(res =>
      this.setState({items: res.items})
    );
  }

  componentDidMount() {
    this.loadItems('python');
  }

  handleSubmit(language) {
    this.setState({items: null});
    this.loadItems(language);
    this.handleClickMenu(false);
  }

  handleClickMenu(flg) {
    this.setState({menuOpen: flg});
  }

  handleClickAbout(flg) {
    this.setState({aboutOpen: flg});
  }

  render({}, {items, menuOpen, aboutOpen}) {
    return (
      <div>
        <Modal
          isOpen={menuOpen}
          onClose={this.handleClickMenu.bind(this, false)}>
          <Menu onSelect={this.handleSubmit.bind(this)} />
        </Modal>
        <Modal
          isOpen={aboutOpen}
          onClose={this.handleClickAbout.bind(this, false)}>
          <blockquote
            class="m-0 text-center about"
            cite="http://lean.codecomputerlove.com/programming-koans-the-what-how-why/">
            <p class="about-p m-t-0 m-b-l">
              koan is to explain programming concepts through unit tests.
            </p>
            <p class="about-p m-y-l">
              presenting failing tests and requiring the candidate to fix the
              tests in an effort to imbue knowledge.
            </p>
            <p class="about-p m-y-l">
              Going through a koan is a good method of jumping into using a new
              programming language.
            </p>
            <p class="about-p m-y-l">
              Ref. :{' '}
              <a href="http://lean.codecomputerlove.com/programming-koans-the-what-how-why/">
                Programming Koans: The what, how and why
              </a>
            </p>
          </blockquote>
        </Modal>
        <Header
          onClickAbout={this.handleClickAbout.bind(this, true)}
          onClikMenu={this.handleClickMenu.bind(this, true)}
        />
        <div>
          {(() => {
            if (items === null) {
              return <Loading />;
            } else {
              return (
                <ul class="result m-0">
                  {items.map(data => (
                    <li class="result-item m-b-m">
                      <Item data={data} />
                    </li>
                  ))}
                </ul>
              );
            }
          })()}
        </div>
      </div>
    );
  }
}
