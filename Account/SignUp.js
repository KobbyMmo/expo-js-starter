import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { signUp } from './Action';

class SignUp extends Component {
  render() {
    return (
      <View>
        <Text>Sign up</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
