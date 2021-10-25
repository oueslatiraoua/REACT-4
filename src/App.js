import "./App.css";
import "./style.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";
import Fullname from "./Component/Profile/Fullname";
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <Fullname />
      <Address />
    </div>
  );
}

export default App;
