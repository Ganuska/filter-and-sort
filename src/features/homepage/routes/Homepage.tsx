import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/authContext';
import { Loader } from '@/components/Elements/Loader';
import { logoutFirebase } from '@/firebase/services';
import { MainLayout } from '../components/Layout';
import Home from '../components/Home';

export const Homepage = (): React.ReactElement | null => {
  const navigate = useNavigate();

  const { status, userId } = useContext(AuthContext);

  useEffect(() => {
    if (status !== 'checking' && status !== 'authenticated' && !userId) {
      navigate('/auth/login');
    }
  }, [status]);
  return (
    <MainLayout>
      {status === 'checking' && <Loader />}
      {status === 'authenticated' && (
        <div>
          <div className="h-10 bg-slate-300 mb-6 w-full flex justify-end pr-4">
            {' '}
            <button onClick={logoutFirebase}>Log Out</button>
          </div>
          <Home />
        </div>
      )}
    </MainLayout>
  );
};
