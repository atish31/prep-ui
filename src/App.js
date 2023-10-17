import logo from './logo.svg';
import './App.css';
import {Header} from './_shared/header';
import {Footer} from './_shared/footer';
import {LandingPage} from './landing_page/landing_page'
function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
