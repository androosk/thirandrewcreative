import React from 'react';
import HomeImage from '../assets/marketing_meeting.png'

const Home = () => {
  return (
    <div className='flex justify-evenly items-center mt-10'>
      <article>
        <h1 className='text-white'>SEO that works</h1>
      </article>
      <article className='w-6/12'>
        <img src={HomeImage} alt="marketing meeting" />
      </article>
    </div>
  )
};

export default Home