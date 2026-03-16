interface ModuleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Module({ children, className = '' }: ModuleProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
