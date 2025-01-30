import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface BackButtonProps {
  className?: string;
}

export const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={cn(
        "flex items-center text-dark-600 hover:text-mint-500 transition-colors",
        className
      )}
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Back
    </button>
  );
};