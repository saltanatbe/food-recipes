import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
