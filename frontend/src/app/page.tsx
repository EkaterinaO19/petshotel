import Link from 'next/link';
import styles from './styles/Home.module.scss';
import Navbar from './components/Navbar';
import MainLanding from './screens/MainLanding';
import logo from './assets/Rectangle_9.png';
import Image from 'next/image';
import rect2  from './assets/Rectangle_2.png'


const HomePage: React.FC = () => {
  return (
    <>
    <Navbar />
       <div className={styles.logoContainer}>
        <Image 
          src={logo}
          alt="Логотип"
          layout="intrinsic"
          // width={100} // это будет максимальная высота
          // height={100} // это будет максимальная ширина 
          />
        </div>  
        <main>
          <MainLanding/>
          {/* <div className={styles.rectContainer}>
            <Image 
          src={rect2}
          alt="Логотип"
          layout="responsive" // Использует адаптивное масштабирование
          width={500} // Укажите желаемую ширину
          height={300} // Укажите высоту, пропорциональную ширине
          objectFit="contain"
          />  
          </div> */}
          
        </main>
    </>

  );
}

export default HomePage;