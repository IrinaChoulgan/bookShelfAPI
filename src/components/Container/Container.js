// import styles from '../Container/Container.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Container({ children }) {
  return <div className="container">{children}</div>;
}
