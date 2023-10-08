import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './Home.module.css';

export default function Home() {
  const pageTitle = 'Home';
  const headerText = 'Phonebook main page';

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className={css.container}>
        <h1 className={css.title}>{headerText}</h1>
      </div>
    </HelmetProvider>
  );
}
