import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Blogs from "./components/Blogs";
import Profile from "./components/Profile";
import BlogDetail from "./components/BlogDetail";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:username" element={<UserDetails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ProtectedRoute path="/user-list" element={<UserList />} />
      <ProtectedRoute path="/profile" element={<Profile />} />
      <ProtectedRoute path="/blog/:id" element={<BlogDetail />} />
      <Footer />
    </div>
  );
}
