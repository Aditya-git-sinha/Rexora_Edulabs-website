import React from 'react';
import './course-detail.css'
import CoursePreview from '../course-preview/course-preview'



class CourseDetail extends React.Component{
  constructor() {
    super()
    this.state = {
      course: [
        {
          title: "R",
          imageUrl:
            "https://cran.r-project.org/Rlogo.svg",
          price: "19$",
        },
        {
          title: "Javascript",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          price: "20$",
        },
        
        
        
        {
          title: "Python",
          imageUrl:
            "https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png",
          price: "16$",
        },
        
        {
          title: "Julia",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Julia_Programming_Language_Logo.svg/1200px-Julia_Programming_Language_Logo.svg.png",
          price: "16$",
        },
      ],
    };
  }

  render() {
    return (
      <div className='det'>
        
        {this.state.course.map(({ title, imageUrl,price }) => (
          
      <CoursePreview 
        title={title}
        imageUrl={imageUrl}
        price ={price}
      />
        )
        )}
    </div>
    );
  }
}

export default CourseDetail;
