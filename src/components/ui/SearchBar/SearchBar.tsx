import Button from "../Button/Button"
import { ButtonType } from "../Button/button.types"

const SearchBar = ({placeholder}:{placeholder:string}) => {
    return (
        <div className="flex items-center w-full bg-white p-4 border-1 rounded-lg shadow-md overflow-hidden">
            <input
                type="text"
                className="w-full text-gray-700 focus:outline-none"
                placeholder={placeholder}
            />
            <Button onClick={() => ""} type={ButtonType.PRIMARY} text="Search" />
        </div>
    )
}

export default SearchBar
