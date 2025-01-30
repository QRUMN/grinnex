import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { Container } from '../components/common/Container';
import { BackButton } from '../components/common/BackButton';
import { Bug } from 'lucide-react';

export const LoginPage = () => {
  return (
    <div className="min-h-screen bg-light-100 dark:bg-dark-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Container>
        <BackButton className="mb-8" />
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Bug className="w-12 h-12 text-mint-500" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-dark-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-dark-600 dark:text-dark-300">
            Or{' '}
            <a href="/onboarding" className="font-medium text-mint-500 hover:text-mint-600">
              schedule a free inspection
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-dark-800 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            <LoginForm />
          </div>
        </div>
      </Container>
    </div>
  );
};