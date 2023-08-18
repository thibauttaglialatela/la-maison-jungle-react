import { useState } from 'react';
import '../styles/Categories.css'

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
    <div className='lmj-categories'>
    <select className='lmj-categories-select' value={selectedCategory} onChange={handleCategoryChange}>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
    <button className='lmj-categories-button' onClick={resetCategory}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
