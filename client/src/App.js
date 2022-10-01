import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import NotFound from './components/layout/NotFound';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Alert />
          <Routes>
            <Route path={"/"} element={<Landing />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/profiles"} element={<Profiles />} />
            <Route path={"/profile/:id"} element={<Profile />} />
            <Route
              path={"/dashboard"}
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path={"/create-profile"}
              element={<PrivateRoute component={CreateProfile} />}
            />
            <Route
              path={"/edit-profile"}
              element={<PrivateRoute component={EditProfile} />}
            />
            <Route
              path={"/add-experience"}
              element={<PrivateRoute component={AddExperience} />}
            />
            <Route
              path={"/add-education"}
              element={<PrivateRoute component={AddEducation} />}
            />
            <Route
              path={"/posts"}
              element={<PrivateRoute component={Posts} />}
            />
            <Route
              path={"/posts/:id"}
              element={<PrivateRoute component={Post} />}
            />
            <Route path="*" element={<NotFound/>}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
