import styles from './styles/Home.module.scss';
import Navbar from './components/Navbar';
import MainLanding from './screens/MainLanding';



const HomePage: React.FC = () => {
  return (
    <>
    <Navbar />
        <main>
          <MainLanding/>
          <>
          {/* <Image src/> */}
          <p>Назвние отеля</p>
          <p>цена в сутки</p>
          <p>рейтинг (0-5)</p>

          </>     
        </main>
    </>

  );
}

export default HomePage;