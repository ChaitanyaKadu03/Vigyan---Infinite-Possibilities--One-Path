import img from '../../public/assets/teacher-1.png';
import poster1 from '../../public/assets/course 1.png'
import poster2 from '../../public/assets/course 2.png'
import poster3 from '../../public/assets/course 3.png'
import Link from 'next/link';

const Course_Card_Data = [
  {
    id: 1,
    subject: 'Physics',
    cost: 'Free',
    heading: 'Class 11th - Physics Concept Course',
    sub_heading: `Building a Strong Foundation for Advanced Learning`,
    paragraph: `Lay a solid foundation in physics with key concepts and principles. Ideal for beginners and those looking to reinforce their basics.`,
    rating: '4.2',
    reviews: '(123 + reviews)',
    student: '486+',
    teacher_img: img,
    teacher_name: 'Sandeep Roy',
    content: '37+ Hours',
    level: 'Beginners ',
    lessons: '38+ lessons',
    poster: poster1,
    link: '/courses/class-11',
    demo_video:'https://youtu.be/LD97NGTC8kI?si=ga0Z4Yiwna4RwQJy'
  },
  {
    id: 2,
    subject: 'Physics',
    cost: 'Free',
    heading: 'Class 12th - Physics Concept Course',
    sub_heading: `Exploring the Fundamentals of Electric Charge and Force`,
    paragraph: `Explore the essentials of electric charges and forces, and learn how electric fields are created and manipulated.`,
    rating: '4.8',
    reviews: '(789 + reviews)',
    student: '865+',
    teacher_img: img,
    teacher_name: 'Sandeep Roy',
    content: '34.7+ Hours',
    level: 'Beginners',
    lessons: '38+ lessons',
    poster: poster2,
    link: '/courses/class-12',
    demo_video:'https://youtu.be/wd2gVNavLCo?si=haSCTVGKm4c3wFd6'
  },
  {
    id: 3,
    subject: 'Physics',
    cost: 'Free',
    heading: 'Advanced Physics',
    sub_heading: `Ace JEE with Advanced Physics Mastery`,
    paragraph: `Dive deep into complex topics and master the skills needed to excel in one of India's toughest entrance exams.`,
    rating: '5.0',
    reviews: '(89+ reviews)',
    student: '000+',
    teacher_img: img,
    teacher_name: 'Sandeep Roy',
    content: '42+ Hours',
    level: 'Advanced',
    lessons: '8+ lessons',
    poster: poster3,
    link: '/courses/advanced-physics',
    demo_video:'https://youtu.be/wd2gVNavLCo?si=haSCTVGKm4c3wFd6'
  }
];

export default Course_Card_Data;
