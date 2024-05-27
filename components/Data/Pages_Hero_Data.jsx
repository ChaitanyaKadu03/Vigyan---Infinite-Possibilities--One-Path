import contact from '../../public/assets/contact hero.png';
import faq from '../../public/assets/faq hero.png';
import testimonial from '../../public/assets/testimonials hero.png';
import courses from '../../public/assets/courses hero.png';
import about from '../../public/assets/about hero.png';

const Pages_Hero_Data = [
  {
    id: 1,
    Heading: `Get in <span className='orange-gradient-font'>Touch</span> with Us`,
    Paragraph: `We're here to help! Whether you have questions about our courses, need assistance with your account, or want to provide feedback, our team is ready to assist you. Fill out the form below or reach out to us directly via email or phone. We look forward to hearing from you!`,
    poster: contact
  },
  {
    id: 2,
    Heading: `<span className='orange-gradient-font'>Explore</span> Frequently <span className='grey-gradient-font'>Asked</span> Questions`,
    Paragraph: `Got questions? We have answers! Explore our Frequently Asked Questions to find detailed information about our courses, teaching methods, and everything you need to know to make the most of your learning experience with Vigyan. If you can't find what you're looking for, feel free to reach out to our support team.`,
    poster: faq
  },
  {
    id: 3,
    Heading: `<span className='grey-gradient-font'>Discover</span> Student <span className='orange-gradient-font'>Success</span> Stories`,
    Paragraph: `Read inspiring success stories from our students! Discover how Vigyan has helped aspiring engineers and doctors achieve their academic goals. Our students share their experiences and the impact Vigyan's courses have had on their journey to excellence.`,
    poster: testimonial
  },
  {
    id: 4,
    Heading: `Explore Our <span className='grey-gradient-font'>Comprehensive</span> <span className='orange-gradient-font'>Physics</span> Courses`,
    Paragraph: `Discover a variety of expertly designed physics courses tailored to help you excel in JEE Main, JEE Advanced, NEET, and your Class 11th and 12th studies. With Vigyan, you can build a strong foundation and achieve academic excellence.`,
    poster: courses
  },
  {
    id: 5,
    Heading: `<span className='grey-gradient-font'>Redefining</span> <span className='orange-gradient-font'>Physics</span> Education`,
    Paragraph: `At Vigyan, we transform the way physics is taught and learned. Founded by academician Sandeep Roy, our mission is to make learning physics engaging and accessible for students preparing for JEE Main, JEE Advanced, and NEET. With innovative teaching methods and comprehensive materials, we inspire students to achieve their academic goals.`,
    poster: about
  }
];

export default Pages_Hero_Data;
