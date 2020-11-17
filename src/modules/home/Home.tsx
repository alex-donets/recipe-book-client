import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";
import CategoryHeading from "../categories/components/Heading/CategoryHeading";
import { setHomePage } from "../categories/actions";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHomePage(true))
    }, []);

    return (
        <>
            <CategoryHeading/>
        </>
    );
};

export default Home;
