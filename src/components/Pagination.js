import '../styles/Pagination.styles.css'

export default function Pagination({ linesPerPage, totalLines, currentPage, setCurrentPage }){

    const Pages = []

    // create pages to be shown in pagination
    for (let i=1; i<=Math.ceil(totalLines / linesPerPage); i++) {
        Pages.push(i)
    }

    return (
        <div>
            <ul className="pagination">
                Pages:
                {
                    Pages.map((page) => (
                        <li className="page-item" key={page}>
                            <button
                             type="button"
                             className={currentPage===page ? "page-btn active-page" : "page-btn"}
                             onClick={()=>{setCurrentPage(page)}}
                            >
                                {page}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}