import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Navbar from './components/Navbar';
import MainLanding from './screens/MainLanding';

const HomePage: React.FC = () => {
  return (
    <div>
        <Navbar />
        <main>
          <MainLanding/>
        
        </main>
    </div>

  );
}

export default HomePage;