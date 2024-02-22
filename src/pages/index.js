import React from 'react';
import Layout from '../layouts/index';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import MyWork from '../components/MyWork';
import GetInTouch from '../components/GetInTouch';


const HomePage = () => {
  return (
    <Layout>
      <Intro />
      <AboutMe />
      {/* <Resume/> */}
      <MyWork />
      {/* <Projects /> */}
      {/* <GetInTouch /> */}
    </Layout>
  );
};

export default HomePage;