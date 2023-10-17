import logo from './logo.svg';
import './App.css';
import {Header} from './_shared/header';
import {Footer} from './_shared/footer';
import {LandingPage} from './landing_page/landing_page'
import {MyCart} from './my_cart/my_cart.js'
function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <MyCart />
      <Footer />
    </>
  );
}

export default App;
