// import Modal from 'react-modal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OptionModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: !!props.selectedOption,
      backdrop: true,

    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
        <Modal
            isOpen={!!this.props.selectedOption}
            backdrop={this.state.backdrop}
            autoFocus={false}

            // onRequestClose={props.handleClearSelectedOption}
            // contentLabel="Selected Option"
            // className="modal"

        >
          <ModalHeader >Selected Option</ModalHeader>
          <ModalBody>
            {this.props.selectedOption}
          </ModalBody>
          <button className="button" onClick={this.props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );
  }
}

OptionModal.propTypes = {};
OptionModal.defaultProps = {};

export default OptionModal;


