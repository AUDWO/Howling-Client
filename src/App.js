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
import CopyKeepDiary from "./Views/CopyKeep";

// CSS Components
import GlobalStyles from "./StyledComponents/GlobalStyles";
import Keep2Diary from "./Views/Keep2Diary";
import MoreStory from "./Views/MoreStory";
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
        <Route path="/keep2diary" element={<Keep2Diary />} />
        <Route path="/copykeepdiary" element={<CopyKeepDiary />} />
        <Route path="/morestory" element={<MoreStory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
