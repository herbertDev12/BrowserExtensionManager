export type ResponsivePosition = {
    base: string;  // mobile (default)
    sm?: string;   // ≥640px
    md?: string;   // ≥768px
    lg?: string;   // ≥1024px
    xl?: string;   // ≥1280px
  };
  
  export interface ResponsiveButtonProps {
    label: string;
    position: ResponsivePosition;
    onClick?: () => void;
    className?: string;
  }