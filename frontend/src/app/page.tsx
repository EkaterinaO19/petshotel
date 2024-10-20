import styles from './styles/Home.module.scss';
import Navbar from './components/Navbar';
import MainLanding from './screens/MainLanding';



const HomePage: React.FC = () => {
  return (
    <>
    <Navbar />
        <main>
          <MainLanding/>
               
        </main>
    </>

  );
}

export default HomePage;