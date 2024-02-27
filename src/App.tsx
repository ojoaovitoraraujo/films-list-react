import Header from './components/Header/Header';
import FilmsSection from './components/FilmsSection/FilmsSection';
import './App.css';
import TableSection from './components/TableSection/TableSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <FilmsSection />
        <TableSection />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;