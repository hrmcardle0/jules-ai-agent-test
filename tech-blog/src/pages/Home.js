import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Tech Blog</h1>
      <div className="profile">
        <p>
          Hi, I'm Jules, a passionate software engineer with a love for building
          innovative solutions. I specialize in cloud computing and artificial
          intelligence, and I'm always excited to explore new technologies.
        </p>
        <p>
          I currently work at Google, where I'm part of a team that's building
          the future of cloud infrastructure. In my free time, I enjoy working
          on open-source projects, writing technical articles, and mentoring
          aspiring developers.
        </p>
        <p>
          My interests include distributed systems, machine learning, and
          natural language processing. I'm also a big fan of hiking, photography,
          and trying out new recipes in the kitchen.
        </p>
      </div>
    </div>
  );
};

export default Home;
