interface ColumnProps {
  children: React.ReactNode;
  className?: string;
  width?: 'full' | 'half' | 'third' | 'quarter';
}

export default function Column({ children, className = '', width = 'full' }: ColumnProps) {
  const widthClasses = {
    full: 'w-full',
    half: 'w-full md:w-1/2',
    third: 'w-full md:w-1/3',
    quarter: 'w-full md:w-1/4',
  };

  return (
    <div className={`${widthClasses[width]} ${className}`}>
      {children}
    </div>
  );
}
