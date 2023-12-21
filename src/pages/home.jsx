import React from 'react';
import Blob from '../components/Blob';
import LetUsKnow from '../components/LetUsKnow';
import MyProject from "../components/MyProject.jsx";
import MyWorks from "../components/MyWorks.jsx";

const Home = () => {
    return (
        <div>

            <Blob />
            <LetUsKnow />
            <MyProject />
            <MyWorks />

        </div>
    );
};

export default Home;