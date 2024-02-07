import React, { useEffect, useState } from 'react';
import MainCarousal from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/Men/men_kurta';
import { men_jeans } from '../../../Data/Men/men_jeans';
import { women_jeans } from '../../../Data/Women/women_jeans';
import { dressPage1 } from '../../../Data/dress/page1';
import { men_shirt } from '../../../Data/Men/men_shirt';

const HomePage = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const alertShown = localStorage.getItem('alertShown');
    fetch('https://ecom-platform-kartik-malaganavar.onrender.com/')
      .then(response => response.json())
      .then(data => {
        if (data.status && !state && !alertShown) {
          setState(true);
          alert('Backend server is up now');
          localStorage.setItem('alertShown', 'true');
        }
        // console.log('API Response:', data);
      })
      .catch(error => {
        console.error('Error fetching API:', error);
      });
  }, []);

  return (
    <div className='mt-10'>
      <MainCarousal />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel products={mens_kurta} sectionName={'Men Kurta'} />
        <HomeSectionCarousel products={men_jeans} sectionName={'Men Jeans'} />
        <HomeSectionCarousel products={men_shirt} sectionName={'Men Shirt'} />
        <HomeSectionCarousel products={dressPage1} sectionName={'Women Dress'} />
        <HomeSectionCarousel products={women_jeans} sectionName={'Women Jeans'} />
      </div>
    </div>
  );
};

export default HomePage;
