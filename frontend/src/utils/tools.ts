export const capitalizeFirstLetter = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getInitials = (name: string) => {
  const names = name.trim().split(" ");
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return (
    names[0].charAt(0).toUpperCase() +
    names[names.length - 1].charAt(0).toUpperCase()
  );
};

interface FormatDateOptions {}

interface FormatDateProps {
  isoDate: string;
  options?: FormatDateOptions;
}

export const formatDate = ({ isoDate }: FormatDateProps) => {
  const date = new Date(isoDate);

  // use options if needed in the future for different formatting styles

  // Default formatting should be like 14 April 2024
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
