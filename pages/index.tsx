import Image from 'next/image';
import BannerImage from '../assets/images/banner-image.jpg';

import NavButton from '@/components/NavButton';

export default function Home() {
  return (
    <>
      <div className=' w-full text-black min-h-full max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4'>
        <div className='lg:w-3/6'>
          <h2 className='max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block'>
            All of your payroll questions are solutions with us.
          </h2>

          <p className='mt-6 max-w-2xl text-xl font-semibold text-[#404040]'>
            Our mission is to provide accurate, timely, and reliable payroll
            services that help businesses streamline their operations, save time
            and money, and ensure compliance with tax and labor laws. We are
            committed to delivering exceptional customer service and customized
            solutions that meet the unique needs of each client. Our goal is to
            be a trusted partner and advisor to our clients, helping them to
            focus on what they do best - growing their business.
          </p>
        </div>
        <div className='mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6'>
          <Image src={BannerImage} alt='Banner image' />
        </div>
      </div>

      <section className='lg:w-full flex justify-around'>
        <NavButton href='apply' />
        <NavButton href='employees-table' />
      </section>

      <div className='bg-white text-black'>
        <div className='mt-32'></div>
        <div className='my-24 p-4 text-black'>
          <div className='max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-slate-400 to-blue-100 px-5 py-24 lg:flex-row'>
            <div className='flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left'>
              <h2 className='pb-4 text-2xl font-bold leading-tight lg:text-4xl'>
                Lorem ipsum mi at amet, consecteturadipiscing elit. Mattis.
              </h2>
              <p className='text-md mb-8 lg:text-xl'>
                Lorem ipsum praesent amet, consectetur adipiscing elit. Cursus
                ullamcorper id tristique tincidunt. Tincidunt feugiat at mi
                feugiat hendrerit. Ac faucibus accumsan, quis lacus, lectus eget
                bibendum. At praesent quisque sollicitudin fusce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
