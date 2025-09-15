import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  title?: string;
  variant?: 'default' | 'stat';
}

const Card = ({ children, className = '', title, variant = 'default', ...props }: CardProps) => {
  const cardClass = variant === 'stat' ? 'stat-card' : 'card';
  
  return (
    <div className={`${cardClass} ${className}`} {...props}>
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;