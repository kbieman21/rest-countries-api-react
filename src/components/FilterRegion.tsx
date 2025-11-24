



interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
}


function FilterRegion({ value, onChange }:FilterSelectProps) {
  return (
    <select
      className="filter-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  );
}


export default FilterRegion;