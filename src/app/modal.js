import {h, Component} from 'preact';

export default class Modal extends Component {
  handleClose() {
    this.props.onClose();
  }

  render({isOpen, children}) {
    const openClass = isOpen ? 'is-open' : '';
    return (
      <div class={`modal flex flex-column flex-center ${openClass}`}>
        <div className="modal-content m-y-l">
          <button
            onClick={this.handleClose.bind(this)}
            type="button"
            class="reset-button modal-close">
            <i class="fa fa-times" aria-hidden="true" />
          </button>
          {children}
        </div>
      </div>
    );
  }
}
