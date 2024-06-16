import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import UserManagementPage from "./pages/UserManagementPage/UserManagementPage";
import Header from "./components/Header/Header";
import React, { useEffect } from "react";
import { setAuthToken } from "./api/apiClient";

const App = () => {
    const token =
        "e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb";

    useEffect(() => {
        setAuthToken(token);
    }, [token]);

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route
                        path="/user-management"
                        element={<UserManagementPage />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
