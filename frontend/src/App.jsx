import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 text-white">
        <Navbar/>
      </header>

      <main className="p-6">
        <AppRoutes/>
      </main>
    </>
  );
}

export default App;
