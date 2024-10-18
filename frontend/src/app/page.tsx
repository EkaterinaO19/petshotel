import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Navbar from './components/Navbar';

const HomePage: React.FC = () => {
  return (
    <>
            <Navbar />
          <main>
            <h1>Welcome to Pet Hotels!</h1>
            <nav>
        
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </nav>
            {/* Add hotel cards and search filters here */}
        </main>
    </>

  );
}

export default HomePage;