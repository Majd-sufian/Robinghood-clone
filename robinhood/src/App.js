import "./App.css";
import Header from "./component/Header";
import Newsfeed from "./component/Newsfeed";
import Stats from "./component/Stats";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;

// app
//   app_headder
//   app_Body
// - newsfeed
//  - stats
