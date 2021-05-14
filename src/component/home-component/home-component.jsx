import React from 'react';
import './home.styles.css';
import Footer from '../footer-component/footer-component'
import CourseDetail from '../course-detail/course-detail.component'

import Most from '../some_texts/main'

const Home = () => (
  <div className='overall'>
    <div className="second">
      <p class = "Heading">See our course Materials</p>
      <CourseDetail />
    </div>
  </div>
);


export default Home;

  
