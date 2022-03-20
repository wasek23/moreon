import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from 'redux/store';
import Layout from './views/pages/Layout';

function App() {
	return <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</PersistGate>
	</Provider>
}
export default App;
