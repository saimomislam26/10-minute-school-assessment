export interface MenuItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  children?: MenuItem[];
}

export interface SearchBarProps {
  placeholder: string;
  className?: string;
}

export interface NavButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'text';
  className?: string;
  onClick?: () => void;
}