import React from "react"
import { Container, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import update from 'react-addons-update';

import Alert from './Alert.js'


class FlashMessages extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
  }

  addMessage(message) {
    const messages = update(this.state.messages, { $push: [message] });

    this.setState({ messages: messages });
  }

  removeMessage(message) {
    const index = this.state.messages.indexOf(message);
    const messages = update(this.state.messages, { $splice: [[index, 1]] });
    this.setState({ messages: messages });
  }

  render () {
    const alerts = this.state.messages.map( message =>
      <Alert key={ message.id } message={ message }
             onClose={ () => this.removeMessage(message) } />
    );

    return(
      <Container style={{ paddingTop: '2rem' }}>
        {(
          <div>{alerts}</div>
        )}
        <CSSTransition
          transitionName='alerts'
          transitionEnter={false}
          // { alerts }

          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <button></button>
        </CSSTransition>
      </Container>
    );
  }
}

export default FlashMessages