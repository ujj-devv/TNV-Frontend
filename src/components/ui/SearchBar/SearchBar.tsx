import Button from "../Button/Button"

const SearchBar = ({placeholder}:{placeholder:string}) => {
    return (
        <div className="flex items-center max-w-md bg-white p-4 border-1 rounded-lg shadow-md overflow-hidden">
            <input
                type="text"
                className="w-full text-gray-700 focus:outline-none"
                placeholder={placeholder}
            />
            <Button text="Search" />
        </div>
    )
}

export default SearchBar
