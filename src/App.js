import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';

function App() {
  return (
    <>
      <Header />
        <main className='h-[95vh] pt-8 md:pt-10 md:overflow-hidden'>
          <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default App;
