import { ContactList } from 'components/ContactsList/ContactsList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <>
      <ContactList stateItem={{ from: location }} />
    </>
  );
};

export default Home;
