import './search-box.styles.css'

const SearchBox = (props) => {

    const {onChangeHandler, placeholder, className} = props;
    return(
        <input 
            type="search" 
            className= {`search-box ${className}`} 
            placeholder = {placeholder} 
            onChange={onChangeHandler}
        />
    )
    
} 

export default SearchBox;