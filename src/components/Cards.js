import React from 'react'
import  Card  from './Card';
import { useState } from 'react';

export const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array =>{
                array.forEach(courseData =>{
                    allCourses.push(courseData);
                })
                
            })
            return allCourses;
        }
        else{
            //return only specific category data array
            return courses[category];

        }
       
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-2'>
        {
        
        getCourses().map((course) => (
            <Card key={courses.id} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        ))
    }

    </div>
  )
}
export default Cards