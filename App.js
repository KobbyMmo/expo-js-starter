import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Vibration,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Store';
import { loadState } from './Store/Storage';

import { AppLoading, Icon, SecureStore } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persistedState: {},
    };
  }

  async componentDidMount() {
    const _persistedState = await loadState();
    this.setState({ persistedState: _persistedState });
  }

  render() {
    if (Object.keys(this.state.persistedState).length > 0) {
      return (
        <Provider store={store(this.state.persistedState)}>
          <View style={styles.container}>
            {/* {Platform.OS === 'ios' ? (
            ) : (
              <StatusBar hidden={true} />
            )} */}
            <StatusBar barStyle='default' />

            <AppNavigator />
          </View>
        </Provider>
      );
    }
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
