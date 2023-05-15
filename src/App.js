import logo from "./logo.svg";
import "./App.css";
import { default as TabComponent } from "./reactTab";
import { Button } from "bootstrap-component-library";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary" label="Primary">
          Primary
        </Button>
        <TabComponent />
      </header>
    </div>
  );
}

export default App;
