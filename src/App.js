import React, { useEffect, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { setAuthToken } from "./api/apiClient";
import Header from "./components/Header/Header";
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));
const UserManagementPage = React.lazy(() =>
    import("./pages/UserManagementPage/UserManagementPage")
);

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
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route
                            path="/user-management"
                            element={<UserManagementPage />}
                        />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
