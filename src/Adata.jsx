import edud from './aboutimg/edu.jpg';
import skills from './aboutimg/skills.jpg';
import hobbies from './aboutimg/hobbies.jpg';
import achivement from './aboutimg/achivement.jpg';
import Edu from './AboutCom/Edu';
import Skills from './AboutCom/Skills';
import Interests from './AboutCom/Interests';
import Achivements from './AboutCom/Achivements';
const Adata=[
{
  id:1,
  imgsrc:edud,
  title:"Education",
  content:Edu()
},
{
    id:2,
    imgsrc:skills,
    title:"Skills",
    content:Skills(),
  },
   {
     id:3,
     imgsrc:hobbies,
     title:"Interests",
     content:Interests()
  },
  {
     id:4,
     imgsrc:achivement,
     title:"Achivements",
     content:Achivements()
   }
];
export default Adata;

 