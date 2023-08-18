import { useState } from 'react';

function Categories({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    onSelectCategory(newCategory);
  };

  function resetCategory() {
    setSelectedCategory('');
    onSelectCategory('');
  }

  return (
    <div>
    <select value={selectedCategory} onChange={handleCategoryChange}>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
    <button onClick={resetCategory}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
