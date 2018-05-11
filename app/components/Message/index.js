/**
*
* Message
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import MessageStyles from './MessageStyles';
// import styled from 'styled-components';


class Message extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MessageStyles>
        <div>
          {this.props.messageText}
        </div>
      </MessageStyles>
    );
  }
  componentDidMount() {
    console.log(this.props)
  }
}

Message.propTypes = {
  messageText: PropTypes.string
};

export default Message;
