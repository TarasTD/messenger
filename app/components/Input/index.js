/**
*
* Input
*
*/

import React from 'react';
import InputStyles from './inputStyles';
import PropTypes from 'prop-types';


class Input extends React.PureComponent {  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    if (this.state.value.trim()== '') return;
    this.props.handleSubmit(this.state.value)
    this.setState({ value: ''})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <InputStyles>
        <div>
          <textarea onKeyPress={this._handleKeyPress} value={this.state.value} autoFocus onChange={this.handleChange} placeholder="Type your message"/>
          <button onClick={this.handleSubmit}>

          </button>
        </div>
      </InputStyles>
    );
  }
}


Input.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Input;
