import { AsyncStorage } from 'react-native';

export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem('state');
    if (serializedState !== null) {
      return JSON.parse(serializedState);
    }
    return { account: {} };
  } catch (error) {
    throw error;
  }
};

export const saveState = async (state) => {
  const serializedState = JSON.stringify(state);

  try {
    await AsyncStorage.setItem('state', serializedState);
  } catch (error) {
    // Error saving data
  }
};
