import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import './page-builder.css';

export default function PageBuilder(props) {
  return (
    <div className="page-builder">
      <Header pageName={props.pageName} userName={props.userName} />
      <div className="main-content">
        <Menu />
        <div className="page-content">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}
