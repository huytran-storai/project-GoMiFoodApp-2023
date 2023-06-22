import Navigation from './navigation';
import { store } from './store'
import { Provider } from 'react-redux'
import 'react-native-url-polyfill/auto';
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
