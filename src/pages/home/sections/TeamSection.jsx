import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ReactComponent as TwitterIcon } from '../../../assets/icons/icon-twitter.svg';

const members = [
  {
    name: 'Curtis wright aka NOMAD',
    role: 'Founder',
    image: '2.png',
    link: 'https://twitter.com/Nomad_eth',
  },
  {
    name: 'Mclovin',
    role: 'Community Manager',
    image: '3.png',
    link: 'https://twitter.com/McLovin198_1',
  },
  {
    name: 'F',
    role: 'Lead Super Dev',
    image: '1.png',
    link: '/',
  },
  {
    name: 'H!ro',
    role: 'Full Stack & Blockchain Dev',
    image: '1.png',
    link: 'https://linkedin.com/in/chen-jiao-49aa76223',
  },
  {
    name: 'AbsoluteSalt',
    role: 'NFT Analyst',
    image: '8.png',
    link: 'https://twitter.com/maxxord1',
  },
  {
    name: 'Ben AKA: Wolfe',
    role: 'Crypto Analyst',
    image: '7.png',
    link: 'https://twitter.com/Bxn_W',
  },
  {
    name: 'Piepzuru',
    role: 'Lead pixel pusher',
    image: '4.png',
    link: 'https://twitter.com/Piepzeru',
  },

  {
    name: 'Neguritab',
    role: 'Background Pixel Pusher',
    image: '5.png',
    link: 'https://twitter.com/neguritab',
  },
  {
    name: 'Reynicorn',
    role: 'Pixel Animator',
    image: '6.png',
    link: 'https://twitter.com',
  },

  {
    name: 'Nick S H',
    role: 'Voxel Artist',
    image: '6.png',
    link: 'https://www.artstation.com/shinigami96',
  },
];

const TeamMember = ({ name, role, image, link }) => {
  return (
    <div className='member'>
      <div className='body'>
        <img src='./assets/images/member.png' alt='Body' />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col'>
          <LazyLoadImage
            effect='blur'
            className='mt-m-8-5-p'
            src={`./assets/images/team/${image}`}
            alt='Team member'
          />
          <div className='description'>
            <h5>{name}</h5>
            <span>{role}</span>
          </div>
        </div>
      </div>
      <div className='footer'>
        <a href={link} target='_blank' rel='noreferrer'>
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className='team-section' id='teamSection'>
      <div className='title'>
        <img
          className='ml-auto w-2/4'
          src='./assets/images/team.png'
          alt='TEAM'
        />
      </div>
      <div className='members'>
        {members.map((member, index) => {
          return (
            <TeamMember
              key={member.name + index}
              name={member.name}
              role={member.role}
              image={member.image}
              link={member.link}
            />
          );
        })}
      </div>
      <div className='position-initial'>
        <img
          className='absolute bottom-0 object-cover w-full'
          src='./assets/images/city-footer.png'
          alt='City Footer'
        />
        <img
          className='absolute bottom-0 w-full object-cover'
          src='./assets/images/shadow.png'
          alt='Footer Shadow'
        />
      </div>
    </div>
  );
};

export default TeamSection;
