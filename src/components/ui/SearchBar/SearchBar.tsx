import Button from "../Button/Button"
import { ButtonType } from "../Button/button.types"
import { SearchBarPropType } from "./search-bar.types"


const SearchBar = ({placeholder, value, customClass, onClick, onChange}:SearchBarPropType) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          e.preventDefault(); 
          onClick(); 
        }
      };
    return (
        <div className={`flex items-center w-full bg-white p-4 border-1 rounded-lg shadow-md overflow-hidden ${customClass}`}>
            <input
                type="text"
                className="w-full text-gray-700 focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={onClick} type={ButtonType.PRIMARY} text="Search" />
        </div>
    )
}

export default SearchBar
