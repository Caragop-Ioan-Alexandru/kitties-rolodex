import './search-box.css';

export const SearchBox = ({ placeholder, handleChange }) => {

    return (

    <input 
        className="search"
        type="search" 
        placeholder={`Search for ${placeholder}`} 
        onChange={handleChange}
    />
    )
}