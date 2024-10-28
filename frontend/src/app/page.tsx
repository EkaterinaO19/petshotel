import styles from './styles/Home.module.scss';
import Navbar from './components/Navbar';
import MainLanding from './screens/MainLanding';
import HotelList from './components/HotelsList';



const HomePage: React.FC = () => {
  return (
    <>
    <Navbar />
        <main>
          <MainLanding/>
          <HotelList />  
          
        </main>
    </>

  );
}

export default HomePage;