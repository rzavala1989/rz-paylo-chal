/* eslint-disable @next/next/no-html-link-for-pages */

const Header: React.FC = () => {
  console.log(globalThis);
  return (
    <>
      <div
        className='
        bg-slate-700
        grotesk
        absolute
        top-0
        h-7
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      '
      >
        Uncertainty? Never! Find out what you&apos;re paying for!
        <a href='/' className='pl-3 underline'>
          Take me there
        </a>
      </div>
      <div className='grotesk mt-6 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6'>
        <div className='mt-4 inline-block pb-4 pl-8'>
          <a href='/' className='align-middle text-3xl font-bold text-black'>
            Ricardo Zavala
          </a>
          <div className='hidden pl-14 align-middle xl:inline-block'>
            <a href='/' className='pr-12 text-xl text-black'>
              About me.
            </a>
            <a href='/' className='pr-12 text-xl text-black'>
              Goals.
            </a>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='hidden py-1 text-right xl:inline-block'>
            <a
              className='bg-orange-600 mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white'
              href='/'
            >
              Log in{' '}
            </a>
          </div>
          <button className='pr-12 pl-4'>
            <svg
              className='mr-auto inline-block text-black xl:hidden'
              width='33'
              height='50'
              viewBox='0 0 23 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.892578 10.8691H22.1058'
                stroke='black'
                strokeLinecap='square'
                strokeLinejoin='round'
              />
              <path
                d='M0.892578 18.8691H22.1058'
                stroke='black'
                strokeLinecap='square'
                strokeLinejoin='round'
              />
              <path
                d='M22.1066 14.8688H0.893399'
                stroke='black'
                strokeLinecap='square'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
