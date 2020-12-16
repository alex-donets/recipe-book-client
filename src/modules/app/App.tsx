import React, { useEffect } from 'react';
import '../../shared/styles/global-styles.scss';

import Header from "../../shared/components/Header/Header";
import Main from "../../shared/components/Main/Main";
import Footer from "../../shared/components/Footer/Footer";
import { runAllInterceptors } from "../../backend/interceptors/interceptors";
import { useDispatch } from "react-redux";
import { getAuthToken } from "../../utils/localStorage";
import { setUserInfo } from "../auth/actions";
import OfflineMode from "../../shared/components/OfflineMode/OfflineMode";

runAllInterceptors();

function App() {
    const dispatch = useDispatch();
    const authToken = getAuthToken();
    const isOffline = !navigator.onLine;

    useEffect(() => {
        if (authToken) {
            dispatch(setUserInfo(authToken));
        }
    }, []);

    return (
        <div className="main-container">
            <Header />

            {isOffline && (
                <OfflineMode />
            )}

            <Main />
            <Footer />
        </div>
    );
}

export default App;
