import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useContext
} from 'react';
import AuthLayout from './AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { EMAIL_REGEX, PWD_REGEX } from '@/utils/regex';
import loginReg from '@/assets/loginReg.jpg';
import { AuthContext } from '@/context/authContext';

interface User {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [error, setError] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [formData, setFormData] = useState<User>({
    email: '',
    password: ''
  });

  const { handleLoginWithCredentials } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const enableSubmit = () => {
    if (formData.email && formData.password) {
      setCanSubmit(true);
    }
  };
  useEffect(() => {
    const isEmailValid = EMAIL_REGEX.test(formData.email);
    const isPwdValid = PWD_REGEX.test(formData.password);
    if (formData.email && !isEmailValid) {
      setError('email is not valid');
    } else if (formData.password && !isPwdValid) {
      setError('password is not valid');
    } else {
      setError('');
      enableSubmit();
    }
  }, [formData.email, formData.password]);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleLoginWithCredentials(formData.password, formData.email).then(() =>
      navigate('/')
    );
  };

  return (
    <AuthLayout>
      <div className="h-full w-[50%] md:hidden">
        <img src={loginReg} alt="splash" />
      </div>
      <div className=" mx-auto w-[50%] md:w-full h-screen flex justify-center items-center p-4 bg-slate-400 rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border text-black border-gray-300 rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full border text-black border-gray-300 rounded p-2"
            />
          </div>
          <p className="mb-4 text-stone-600 text-sm text-center">
            don`t have an account?{' '}
            <Link className="hover:text-blue-500" to={'/auth/register'}>
              Sign up
            </Link>{' '}
          </p>
          <div className="flex justify-center">
            <button
              disabled={!canSubmit}
              type="submit"
              className="bg-blue-500 disabled:bg-blue-300 text-white font-semibold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
          {error && (
            <div>
              <p className="text-red-500 text-center mt-2 text-[0.9rem]">
                {error}
              </p>
            </div>
          )}
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
