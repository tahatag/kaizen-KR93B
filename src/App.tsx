import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { SearchBar } from './components/search-bar';
import { UserDetails } from './components/user-details';
import { UsersTable } from './components/users-table';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">
              Kaizen-KR93B | Seyed Mohammad Taha Taghados
            </h1>
          </div>
        </header>
        <main className="flex flex-col gap-2 container mx-auto px-4 py-8">
          <SearchBar />
          <UsersTable />
          <UserDetails />
        </main>
      </div>
    </Provider>
  );
}

export default App;
