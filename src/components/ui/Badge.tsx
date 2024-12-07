import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'warning' | 'live';
  children: React.ReactNode;
}

export function Badge({ variant = 'primary', children }: BadgeProps) {
  const variants = {
    primary: 'bg-[#00A651] text-white',
    secondary: 'bg-orange-100 text-orange-600',
    warning: 'bg-red-500 text-white',
    live: 'bg-red-500 text-white flex items-center gap-1'
  };

  return (
    <div className={`px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {variant === 'live' && <span className="w-2 h-2 bg-white rounded-full animate-pulse" />}
      {children}
    </div>
  );
}