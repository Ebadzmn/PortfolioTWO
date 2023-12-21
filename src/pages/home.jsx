import React from 'react';
import Blob from '../components/Blob';
import LetUsKnow from '../components/LetUsKnow';
import MyProject from "../components/MyProject.jsx";
import MyWorks from "../components/MyWorks.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Footer from "../components/Footor.jsx";

const Home = () => {
    return (
        <div>

            <Blob />
            <LetUsKnow />
            <MyProject />
            <MyWorks />
            <Testimonial />
            <Footer />

        </div>
    );
};

export default Home;