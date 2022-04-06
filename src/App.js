import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ChatScreen } from './screens/ChatScreen';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile'
import { ChatList } from './components/ChatList/ChatList';
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatList />}>
            <Route path=":id" element={<ChatScreen />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;