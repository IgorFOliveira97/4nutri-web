import './Container.css';

export default function Container({ children, width }) {
  return (
    <div className="container" style={{ width: width }}>
      {children}
    </div>
  );
}
