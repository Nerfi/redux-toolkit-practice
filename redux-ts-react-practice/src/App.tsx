import { Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import BookResult from "./components/BookSearch/BookResult";
import FavoriteList from "./components/Favorites/FavoriteList";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<p>home route</p>} />
        <Route path="signup" element={<Signup />} />
        <Route path="books" element={<BookResult />} />
        <Route path="favorites" element={<FavoriteList />} />

        <Route path="login" element={<Login />}>
          {/* <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} /> */}
        </Route>

        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
    </>
  );
}
