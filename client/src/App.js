import Main from './components/main';
import './App.css';
import './CSS/forms.css'
import './CSS/main.css'
import './CSS/cart.css'
import './CSS/product.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
