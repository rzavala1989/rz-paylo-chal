/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className='bottom-0 text-white grotesk bg-[#160f62] '>
        <div className='px-2'>
          <div className='max-w-8xl mx-auto px-5 py-6'>
            <h2 className=''>My Footer</h2>
            <div>
              <h2 className='my-4 text-sm'>
                Feel free to visit any affiliate links{' '}
                <br className='hidden lg:inline-block' /> All Rights Reserved
              </h2>
            </div>
            <div className='absolute right-0 -mt-24 hidden text-black lg:inline-block'>
              <a href='/' className='mr-16'>
                Terms & Conditions
              </a>
              <a href='/' className='mr-16'>
                Privacy Policy
              </a>
              <a href='/' className='mr-16'>
                Cookie Policy
              </a>
            </div>
            <div className='right-0 inline-block pt-12 pb-6 pr-20 text-sm text-white-500 md:hidden'>
              <a href='/' className='mr-16'>
                Terms & Conditions
              </a>
              <a href='/' className='mr-16'>
                Privacy Policy
              </a>
              <a href='/' className='mr-16'>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
