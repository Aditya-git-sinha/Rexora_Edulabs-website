import { findAllByAltText } from '@testing-library/react';
import React from 'react';
import './reviews.css'
import CoursePreview from '../course-preview/course-preview'

class Reviews extends React.Component{
  constructor() {
    super();
    this.state = {
      rev: [
        {
          name: "ABC",
          review: "Best platform to learn coding ",
          imageUrl:
            "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
        },
        {
          name: "XYZ",
          review:
            "Good support from mentors",
          imageUrl:
            "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
        },
        {
          name: "WABS",
          review: "Good teaching",
          imageUrl:
            "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
        },
      ],
    };
    
  }

  render() {
    return (
      <div className="text-light">
        {this.state.rev.map(({ name, review, imageUrl }) => (
          <CoursePreview title={name} price={review} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Reviews;
