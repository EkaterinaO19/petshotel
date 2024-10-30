import styles from './styles/Home.module.scss';
import Navbar from './components/Navbar';
import MainLanding from './screens/MainLanding';
import HotelList from './components/HotelsList';
import SearchBar from './components/SearchBar';



const HomePage: React.FC = () => {
  return (
    <>
    <Navbar />
        <main>
          <MainLanding/>
          <SearchBar />
          <HotelList />  
        </main>
    </>

  );
}

export default HomePage;