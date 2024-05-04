import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons
import teamMember1Img from '../../imgs/allinone.jpg';
import teamMember2Img from '../../imgs/allinone.jpg';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Aymane Farajallah',
      bio: 'Graphic designer, Full Stack Web Developer',
      image: teamMember1Img,
      social: {
        github: 'aymane-farajallah',
        instagram: 'hajji__ayman',
        linkedin: "aymane-farrajallah"
      },
    },
    {
      id: 2,
      name: 'Oussama Aalouch',
      bio: 'Graphic designer, Full Stack Web Developer',
      image: teamMember2Img,
      social: {
        github: 'IAMTHEWONDERER',
        instagram: 'wondererxdd',
        linkedin : "oussama-alouche"
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black py-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-koulen">OUR TEAM</h1>
        <div className="w-64 h-1 bg-black mx-auto my-4"></div>
      </div>

      <div className="flex justify-center flex-wrap mt-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="px-6 py-4">
              <div className="font-koulen text-3xl mb-2 text-center">{member.name}</div>
              <p className="text-gray-700 text-base text-center p-3">{member.bio}</p>
            </div>
            <div className="flex items-center justify-center px-6 pt-4 pb-2">
              <a href={`https://github.com/${member.social.github}`} target="_blank" rel="noopener noreferrer" className="mr-2">
                <FaGithub className="md:text-3xl mb-6"/>
              </a>
              <a href={`https://www.instagram.com/${member.social.instagram}`} target="_blank" rel="noopener noreferrer" className="mr-2">
                <FaInstagram className="md:text-3xl ml-6 mb-6"  />
              </a>
              <a href={`https://www.linkedin.com/in/${member.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="mr-2">
                <FaLinkedin className="md:text-3xl ml-6 mb-6"  />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
