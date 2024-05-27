import img from '../../public/assets/teacher 2.jpg';
import poster1 from '../../public/assets/course_1.jpg'
import poster2 from '../../public/assets/course_2.jpg'
import poster3 from '../../public/assets/course_4.jpg'

const Course_Card_Data = [
  {
    id: 1,
    subject: 'Physics',
    cost: 'Free',
    heading: 'Basics of Physics',
    sub_heading: `Building a Strong Foundation for Advanced Learning`,
    paragraph: `Lay a solid foundation in physics with key concepts and principles. Ideal for beginners and those looking to reinforce their basics.`,
    rating: '4.2',
    reviews: '(123 + reviews)',
    student: '486+',
    teacher_img: img,
    teacher_name: 'Sandeep Roy',
    content: '86 Hours',
    level: 'Beginners ',
    lessons: '12+ lessons',
    poster: poster1
  },
  {
    id: 2,
    subject: 'Physics',
    cost: 'Free',
    heading: 'Electrostatics ',
    sub_heading: `Exploring the Fundamentals of Electric Charge and Force`,
    paragraph: `Explore the essentials of electric charges and forces, and learn how electric fields are created and manipulated.`,
    rating: '4.8',
    reviews: '(789 + reviews)',
    student: '865+',
    teacher_img: img,
    teacher_name: 'Sandeep Roy',
    content: '58 Hours',
    level: 'Beginners ',
    lessons: '10+ lessons',
    poster: poster2
  },
  {
    id: 3,
    subject: 'Physics',
    cost: 'Free',
    heading: 'Motion in One Dimension',
    sub_heading: `Understanding the Principles of Linear Motion`,
    paragraph: `Understand linear motion principles, including displacement, velocity, and acceleration, through comprehensive lessons.`,
    rating: '4.2',
    reviews: '(325 + reviews)',
    student: '278+',
    teacher_img: img,
    teacher_name: 'Sandeep Roy',
    content: '18 Hours',
    level: 'Beginners ',
    lessons: '8+ lessons',
    poster: poster3
  }
];

export default Course_Card_Data;
