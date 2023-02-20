import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='grotesk max-w-8xl mx-auto min-h-screen'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Main;
