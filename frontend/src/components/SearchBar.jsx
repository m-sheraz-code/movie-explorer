import { useState } from 'react';

function SearchBar() {
  const [Moviename, setName] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${Moviename}`);
  };

  return (
    <div className="search-main">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Hi! Search Here ..." 
          value={Moviename} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button onClick={handleSearch} className="search-btn">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
