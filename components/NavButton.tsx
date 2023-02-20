import Link from 'next/link';
import { hyphenToSpace } from '@/utils/functions/hyphenWithSpace';

type Props = {
  href: string;
};

const NavButton: React.FC<Props> = ({ href }) => {
  return (
    <Link
      href={`${href}`}
      className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'
      role='button'
    >
      Go to {hyphenToSpace(href)}
    </Link>
  );
};

export default NavButton;
