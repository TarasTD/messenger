/**
 *
 * MessageView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMessageView from './selectors';
import reducer from './reducer';
import saga from './saga';
import Message from '../../components/Message/Loadable';
import Input from '../../components/Input';
import MessageStyles from './MessageStyles'

export class MessageView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(value) {
    let messages = this.state.messages;
    messages.push(value)
    this.setState({ messages: messages });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>MessageView</title>
          <meta name="description" content="Description of MessageView" />
        </Helmet>
        <MessageStyles>
          {this.state.messages.map((messagetext, index) => {
            return <Message key={index} messageText={messagetext}>messagetext</Message>
            }
          )}
        </MessageStyles>
        <Input handleSubmit={this.onSubmitForm}/>
      </div>
    );
  }
}

MessageView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  messageview: makeSelectMessageView(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMessage: (evt) => {
      console.log('CHNAGE');
      // dispatch(changeUsername(evt.target.value))
    },
    onSubmitForm: (evt) => {
      console.log('SUBMIT');
    },
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'messageView', reducer });
const withSaga = injectSaga({ key: 'messageView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MessageView);
