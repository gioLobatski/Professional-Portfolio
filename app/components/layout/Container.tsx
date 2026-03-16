interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-[5%] ${className}`}>
      {children}
    </div>
  );
}
