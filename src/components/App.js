import { createContext, useEffect, useState } from "react"
import '../styles/App.styles.css'
import Header from "./Header"
import Main from "./Main"
import Footer from './Footer'

export const DataContext = createContext([])

export default function App(){

    const [data, setData] = useState([])

    useEffect(()=>{
        async function FetchData(){
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(response => setData(response))
        }
        FetchData()
    }, [])
    return (
        <DataContext.Provider value={data}>
            <Header />
            <Main />
            <Footer />
        </DataContext.Provider>
    )
}