import React from 'react'
import ProfileCard from './ProfileCard'
import image1 from './assets/Images/Image1.jpg';
import image2 from './assets/Images/Image2.jpg';
import image3 from './assets/Images/Image3.png';
import image4 from './assets/Images/Image4.jpg';

function App() {


  return (
    <>
    <ProfileCard
        name="John"
        city="San Francisco"
        description="Full Stack Developer"
        skills={["JavaScript", "React", "Node.js", "MongoDB", "Express"]}
        online={true}
        profile={image1}
      />
      <ProfileCard
        name="Michael"
        city="Chicago"
        description="Software Engineer"
        skills={["Java", "Spring Boot", "MySQL", "Angular"]}
        online={false}
        profile={image2}
      />
      <ProfileCard
        name="Emily"
        city="Los Angeles"
        description="UI/UX Designer"
        skills={["UI/UX Design", "Sketch", "Adobe XD", "Prototyping"]}
        online={false}
        profile={image3}   
     />
     <ProfileCard
        name="David"
        city="Seattle"
        description="Backend Developer"
        skills={["Python", "Django", "Flask", "SQL", "REST API"]}
        online={true}
        profile={image4}
/>
    </>
  )
}

export default App





