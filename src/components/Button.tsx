import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  download?: string | boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export const Button = ({
  variant = 'primary',
  href,
  download,
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative px-8 py-3.5 rounded-full font-display text-sm font-semibold tracking-wider transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-bg-primary";
  
  const variants = {
    primary: "bg-accent-gold text-bg-primary hover:bg-opacity-95 shadow-lg shadow-accent-gold/10",
    secondary: "bg-accent-pink text-bg-primary hover:bg-opacity-95 shadow-lg shadow-accent-pink/10",
    outline: "border border-border-subtle bg-transparent text-text-main hover:border-accent-gold/40 hover:bg-accent-gold/5"
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={false}
        whileHover={{ scale: 1.05 }}
      />
    </>
  );

  const wrapperProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 15 } as const
  };

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    const linkProps = isExternal
      ? { href, target: '_blank', rel: 'noopener noreferrer' }
      : { href };

    return (
      <motion.a
        {...wrapperProps}
        {...linkProps}
        onClick={onClick as any}
        download={download}
        className={`${baseStyles} ${variants[variant]} ${className} inline-flex`}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...wrapperProps}
      type={type}
      disabled={disabled}
      onClick={onClick as any}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};
