import Join from "./Join";
import Login from "./Views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/User";
import UserPost from "./UserPost";
import UserPosts from "./UserPosts";
import "./App.css";
import Home from "./Views/Home";
import SignUp from "./Views/SignUp";
import Diary from "./Views/Diary";
import MoreDiary from "./Views/MoreDiary";
import KeepDiary from "./Views/KeepDiary";

// CSS Components
import GlobalStyles from "./StyledComponents/GlobalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<SignUp />} />
        <Route path="/userr" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpost" element={<UserPost />} />
        <Route path="/userposting" element={<UserPosts />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/morediary" element={<MoreDiary />} />
        <Route path="/keepdiary" element={<KeepDiary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
