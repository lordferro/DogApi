import Select from 'react-select';

export const BreedSelect = ({ breeds, onChange }) => {
  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name,
  }));
  return <Select options={options} onChange={option => onChange(option.value)} />;
};
