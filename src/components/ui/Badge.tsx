import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'mint' | 'purple';
  className?: string;
}

export default function Badge({ children, variant = 'mint', className = '' }: BadgeProps) {
  const variantStyles = {
    mint: 'bg-[#00F0B5] text-[#1C1C1E]',
    purple: 'bg-[#5C33FF] text-white'
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
