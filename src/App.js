import "./App.css";
import { default as TabComponent } from "./reactTab";
import { Button } from "bootstrap-component-library";
import { ReactComponent as Logo } from './icons8-delete.svg';
import done from './icons8-done-24.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <Button
          variant="primary"
          startIcon={<Logo/>}
          endIcon={<img src={done}/>}
          lab="Button"
        />
        <TabComponent />
      </header>
    </div>
  );
}

export default App;
