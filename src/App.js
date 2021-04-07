
import {BrowserRouter , Route , Switch} from "react-router-dom" ;
import ValidatedLoginForm from './ValidatedLoginForm.js';
import Retrieve from './Retrieve.js';
import './styles.css';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
         <Route exact path={"/"} component={ValidatedLoginForm}/>
         
         <Route path={"/retrieve"} component={Retrieve} />
         
        </Switch>    
      </BrowserRouter>    
      
    </div>
  );
}

export default App;
