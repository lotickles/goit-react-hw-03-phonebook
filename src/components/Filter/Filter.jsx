export const Filter = ({ filter, setFilter }) => {
  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <p>Find Contact by Name</p>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </div>
  );
};
