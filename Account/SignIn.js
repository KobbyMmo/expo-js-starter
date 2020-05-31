import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { signIn } from './Action';

class SignIn extends Component {
  render() {
    return <View></View>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
