import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '../../lib/validation/auth';
import { FormInput } from '../common/form/FormInput';
import { useSetAtom } from 'jotai';
import { setUserAtom } from '../../store/auth';
import { authApi } from '../../lib/api/auth';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Loader } from 'lucide-react';

export const LoginForm = () => {
  const setUser = useSetAtom(setUserAtom);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    watch
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userType: 'residential'
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await authApi.login(data);
      setUser(response.user);
      reset();
      
      // Redirect based on user role
      switch (response.user.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'commercial':
          navigate('/commercial');
          break;
        default:
          navigate('/dashboard');
      }
    } catch (error) {
      setError('root', {
        message: 'Invalid email or password',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Account Type
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
            { value: 'admin', label: 'Admin' }
          ].map(({ value, label }) => (
            <label
              key={value}
              className={`relative flex items-center justify-center px-3 py-2 border rounded-lg cursor-pointer focus-within:ring-2 focus-within:ring-mint-500 transition-colors ${
                errors.userType ? 'border-red-300' : 'border-gray-300'
              } ${
                watch('userType') === value 
                  ? 'bg-mint-500 border-mint-500 text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-900'
              }`}
            >
              <input
                type="radio"
                value={value}
                {...register('userType')}
                className="sr-only"
              />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <FormInput
        label="Email address"
        type="email"
        autoComplete="email"
        {...register('email')}
        error={errors.email?.message}
      />

      <FormInput
        label="Password"
        type="password"
        autoComplete="current-password"
        {...register('password')}
        error={errors.password?.message}
      />

      {errors.root && (
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.root.message}
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-mint-500 hover:bg-mint-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mint-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader className="w-4 h-4 mr-2 animate-spin" />
            Signing in...
          </>
        ) : (
          'Sign in'
        )}
      </button>

      <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Don't have an account?{' '}
          <a
            href="/onboarding"
            className="text-mint-600 hover:text-mint-500 font-medium"
          >
            Get started
          </a>
        </p>
      </div>
    </form>
  );
};