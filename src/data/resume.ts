// data/resume.ts
import { ResumeData } from '@/interface/resume';

export const resumeData: ResumeData = {
  education: [
    {
      yearRange: '2010-2014',
      title: 'Bachelor of Science in Computer Science',
      items: [
        {
          title: 'University of Example',
          subTitle: 'City, Country',
          result: 'First Class Honors',
          des: 'Studied various aspects of computer science including algorithms, data structures, and software engineering.',
        },
        {
          title: 'University of Example',
          subTitle: 'City, Country',
          result: 'First Class Honors',
          des: 'Studied various aspects of computer science including algorithms, data structures, and software engineering.',
        },
      ],
    },
    
  ],
  skills: [
    {
      name: 'Design Skills',
      skill: [
        { name: 'Photoshop', percentage: '80%' },
        { name: 'Figma', percentage: '90%' },
      ],
    },
    {
      name: 'Development Skills',
      skill: [
        { name: 'React', percentage: '80%' },
        { name: 'Tailwind CSS', percentage: '60%' },
        { name: 'Node.js', percentage: '70%' },
      ],
    },
  ],
  achievements: [
    {
      yearRange: '2018',
      title: 'Employee of the Year',
      items: [
        {
          title: 'XYZ Corporation',
          subTitle: 'City, Country',
          result: 'Awarded',
          des: 'Recognized for exceptional performance and dedication to the company’s success.',
        },
      ],
    },
    {
      yearRange: '2019',
      title: 'Top Innovator Award',
      items: [
        {
          title: 'ABC Innovations',
          subTitle: 'City, Country',
          result: 'Winner',
          des: 'Awarded for developing innovative solutions that significantly improved company processes.',
        },
      ],
    },
  ],
  experience: [
    {
      yearRange: '2017-2019',
      title: 'Junior Software Developer',
      items: [
        {
          title: 'Tech Solutions Inc.',
          subTitle: 'City, Country',
          result: '2 Years',
          des: 'Developed and maintained web applications, collaborated with cross-functional teams, and contributed to software design and development projects.',
        },
        {
            title: 'Tech Solutions Inc.',
            subTitle: 'City, Country',
            result: '2 Years',
            des: 'Developed and maintained web applications, collaborated with cross-functional teams, and contributed to software design and development projects.',
          },
      ],
    },
    {
      yearRange: '2019-Present',
      title: 'Senior Software Engineer',
      items: [
        {
          title: 'Innovative Tech Ltd.',
          subTitle: 'City, Country',
          result: '5 Years',
          des: 'Leading the development of major projects, mentoring junior developers, and implementing best practices for software development and deployment.',
        },
      ],
    },
  ],
};
