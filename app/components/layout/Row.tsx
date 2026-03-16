interface RowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Row({ children, className = '' }: RowProps) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-[5%] ${className}`}>
      {children}
    </div>
  );
}
