import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBoks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <BookList books={fantasy} />
      <Welcome />
      <AllTheBoks />
      <MyFooter />
    </div>
  );
}

export default App;
