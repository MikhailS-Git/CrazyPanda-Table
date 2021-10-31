import { useContext, useMemo, useState } from "react"
import { DataContext } from "./App"
import "../styles/Table.styles.css"
import { SearchContext } from "./Main"
import Pagination from "./Pagination"


export default function Table(){

    const data = useContext(DataContext)
    const { colomn, setColomn, order, setOrder, params } = useContext(SearchContext)

    const sortedPosts = useMemo(()=> Sort(data), [data, colomn, order, params])

    // Pagination functionality
    const [currentPage, setCurrentPage] = useState(1)
    const lastPage = currentPage * 10
    const firstPage = lastPage - 10

    const postsToShowOnCurrentPage = sortedPosts.slice(firstPage, lastPage)

    function Sort(arr) {

        const copyArray = [...arr].filter((post) => {
            return post ? (String(post.id).includes(params) || post.title.slice(0, 20).includes(params) || post.body.slice(0, 40).includes(params)) : null
        })

        switch (colomn) {
            case 'ID':
                switch (order) {
                    case true:
                        return copyArray.sort((a,b) => Number(a.id) - Number(b.id))
                    case false:
                        return copyArray.sort((a,b) =>  Number(b.id - Number(a.id)))
                }

            case "Title":
                switch (order) {
                    case true:
                        return copyArray.sort((a,b) => {
                            return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
                        })
                    case false:
                        return copyArray.sort((a,b) => {
                            return b.title > a.title ? 1 : b.title < a.title ? -1 : 0
                        })
                }
            
            case "Text":
                switch (order) {
                    case true:
                        return copyArray.sort((a,b) => {
                            return a.body > b.body ? 1 : a.body < b.body ? -1 : 0
                        })
                    case false:
                        return copyArray.sort((a,b) => {
                            return b.body > a.body ? 1 : b.body < a.body ? -1 : 0
                        })
                }
        }
    }

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th onClick={()=> {setColomn('ID', setOrder(!order))} }>
                            ID
                            {(colomn === 'ID' && order === false) ? <span>&darr;</span> : null}
                        </th>
                        <th onClick={()=> {setColomn('Title', setOrder(!order))} }>
                            Title
                            {(colomn === 'Title' && order === false) ? <span>&darr;</span> : null}
                        </th>
                        <th onClick={()=> {setColomn('Text', setOrder(!order))} }>
                            Text
                            {(colomn === 'Text' && order === false) ? <span>&darr;</span> : null}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postsToShowOnCurrentPage.map((item, index) => {
                            return (
                                <tr key={item.title+index}>
                                    <td>{item.id}</td>
                                    <td>{item.title.slice(0,20)}</td>
                                    <td>{item.body.slice(0,40)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            { !sortedPosts.length ? <p>Nothing to show...</p> : null }

            <Pagination
             linesPerPage={10}
             totalLines={sortedPosts.length}
             currentPage={currentPage}
             setCurrentPage={setCurrentPage}
            />
        </div>
    )
}