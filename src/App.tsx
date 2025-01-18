import { store } from '@/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-bold">Kaizen-KR93B</h1>
      </div>
    </Provider>
  );
}

export default App;
