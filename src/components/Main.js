import { createContext, useState } from 'react'
import '../styles/Main.styles.css'
import Search from './Search'
import Table from './Table'

export const SearchContext = createContext()

export default function Main(){

    const [colomn, setColomn] = useState('ID')
    const [order, setOrder] = useState(true)
    const [params, setParams] = useState('')

    const initialContext = {
        colomn,
        setColomn,
        order,
        setOrder,
        params,
        setParams
    }

    return (
        <div className='main'>
            <SearchContext.Provider value={initialContext}>
                <Search />
                <Table />
            </SearchContext.Provider>
        </div>
    )
}