import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/footer'; 
import { LoaderProvider } from './context/LoaderContext';
import './App.css';

function App() {
  return (
    <LoaderProvider>
      <header className="flex justify-between items-center bg-gray-800 text-white">
        <Navbar/>
      </header>

      <main>
        <AppRoutes/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </LoaderProvider>
  );
}

export default App;
