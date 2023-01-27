import Document from "./components/Document";
import MobileMenu from "./components/MobileMenu";
import Navigation from "./components/Navigation";
import "./index.scss";

function App() {
  return (
    <div className="app">
      <div className="mynavigation">
        <Navigation />
      </div>

      <MobileMenu />

      <div className="space"></div>
      <Document />
    </div>
  );
}

export default App;
