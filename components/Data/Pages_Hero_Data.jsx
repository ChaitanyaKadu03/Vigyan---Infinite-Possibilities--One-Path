import contact from '../../public/assets/contact hero.png';
import faq from '../../public/assets/faq hero.png';
import testimonial from '../../public/assets/testimonials hero.png';
import courses from '../../public/assets/courses hero.svg';
import about from '../../public/assets/about hero.png';

const Pages_Hero_Data = [
  {
    id: 1,
    Heading: `Get in <span className='orange-gradient-font'>Touch</span>`,
    Paragraph: `We're here to help! Whether you have questions, need assistance, or want to provide feedback, our team is ready to assist you. Reach out via email or phone.`,
    poster: contact
  },
  {
    id: 2,
    Heading: `<span className='orange-gradient-font'>Explore</span> FAQs`,
    Paragraph: `Got questions? We have answers! Explore our FAQ to find info about our courses and teaching methods. If you can't find what you're looking for, reach out to our support team.`,
    poster: faq
  },
  {
    id: 3,
    Heading: `<span className='grey-gradient-font'>Student</span> <span className='orange-gradient-font'>Stories</span>`,
    Paragraph: `Read inspiring success stories from our students! Discover how Vigyan has helped aspiring engineers and doctors achieve their academic goals.`,
    poster: testimonial
  },
  {
    id: 4,
    Heading: `Our <span className='grey-gradient-font'>Courses</span>`,
    Paragraph: `Explore our physics courses to excel in JEE, NEET, and Class 11th and 12th. Vigyan helps you build a strong foundation and achieve academic success.`,
    poster: courses
  },
  {
    id: 5,
    Heading: `<span className='grey-gradient-font'>Physics</span> <span className='orange-gradient-font'>Education</span>`,
    Paragraph: `At Vigyan, we transform how physics is taught and learned. Founded by Sandeep Roy, our mission is to make learning physics engaging and accessible with innovative teaching methods.`,
    poster: about
  }
];

export default Pages_Hero_Data;
