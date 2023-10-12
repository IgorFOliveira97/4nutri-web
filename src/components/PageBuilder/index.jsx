import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import './page-builder.css';
export default function PageBuilder(props) {
  return (
    <div className='page-builder'>
      <Header pageName={props.pageName} userName={props.userName}/>
      <Menu />
      <Footer />
    </div>
  );
}
