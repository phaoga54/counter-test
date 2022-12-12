import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { CounterScreen } from './src/screen/counter-screen';

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
