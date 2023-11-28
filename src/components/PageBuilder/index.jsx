import { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import './page-builder.css';
import { Context } from '../../Context/AuthProvider';

export default function PageBuilder({ pageName, children }) {
  const { authenticated } = useContext(Context);
  return (
    <div className="page-builder">
      <Header pageName={pageName} />
      <div className="main-content">
        {authenticated && <Menu />}
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
