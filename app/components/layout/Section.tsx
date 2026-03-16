interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  backgroundColor?: string;
}

export default function Section({ children, id = '', className = '', backgroundColor = 'bg-white' }: SectionProps) {
  return (
    <section id={id} className={`py-[60px] ${backgroundColor} ${className}`}>
      {children}
    </section>
  );
}
