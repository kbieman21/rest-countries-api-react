
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}


export default function SearchBar({ value, onChange }:SearchBarProps) {
  return (
    <input
      className="search-input"
      placeholder="Search for a country..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
