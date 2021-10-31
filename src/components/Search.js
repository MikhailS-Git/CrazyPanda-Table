import { useContext } from "react"
import { SearchContext } from "./Main"
import '../styles/Search.styles.css'

export default function Search(){

    const { params, setParams } = useContext(SearchContext)

    return (
        <div className='search-form'>
            <h3 className='search-title'>
                Search parameters
            </h3>
            <p className='input-label'>
                Enter text to search for:
            </p>
            <input
             value={params}
             onChange={(e) => {setParams(e.target.value)}}
             className='input'
            />
        </div>
    )
}