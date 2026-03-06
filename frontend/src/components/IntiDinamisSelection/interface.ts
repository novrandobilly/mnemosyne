export interface IntiDinamisSelectionProps {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  containerClassName?: string;
}
