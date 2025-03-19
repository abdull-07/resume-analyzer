import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 text-white">
        <Navbar/>
      </header>

      <main>
        <AppRoutes/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
