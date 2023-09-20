import { Suspense } from 'react';
import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CircularProgress from '@mui/material/CircularProgress';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                marginTop: '100px',
              }}
            >
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <CircularProgress color="success" />
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={true} />
      </main>
    </Container>
  );
};
