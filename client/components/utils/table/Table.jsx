import React, { useState } from 'react';
import { Input } from 'reactstrap';
import styles from './Table.module.css';

const Table = ({ columns, data, itemsPerPage, onPageChange, initialPage, search, className }) => {
    initialPage = initialPage || 1;
    itemsPerPage = itemsPerPage || 10;
    const [searchWord, setSearchWord] = useState('');
    const [currentPage, setCurrentPage] = React.useState(initialPage);
    const _getPreviousConsecutivesCurrentPage = () => {
        const previousConsecutives = [];
        for (let i = currentPage - 3; i < currentPage; i++) {
            if (i > 0)
                previousConsecutives.push(i);
        }
        return previousConsecutives;
    }
    
    const _changePage = (page) => {
        setCurrentPage(page);
        onPageChange?.call(page);
    }

    const _filtredSearch = () => data.filter((item) => JSON.stringify(item).toLowerCase().includes(searchWord.toLowerCase()));

    const _getNextConsecutivesCurrentPage = () => {
        const nextConsecutives = [];
        for (let i = currentPage + 1; i <= currentPage + 3; i++) {
            if (i <= (_filtredSearch().length / itemsPerPage) +1)
                nextConsecutives.push(i);
        }
        return nextConsecutives;
    }
    return <div className={`${className} my-4`}>
        {search && <Input onChange={(e)=>setSearchWord(e.target.value)} value={searchWord} placeholder="Buscar" />}
        {/* #region table */}
        <div className='w-full overflow-x-auto py-2 flex md:justify-center '>
            <table className='text-center whitespace-nowrap table-auto w-full'>
                <thead className='shadow-sm'>
                    <tr>
                        {columns.map((column, index) => <th key={index} className='py-3 px-4'>{column.displayName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {_filtredSearch().slice((currentPage - 1) * itemsPerPage, (currentPage) * itemsPerPage).map((item, index) => <tr key={index} className='font-medium border-b'>
                        {columns.map((column, indexColumn) => <td key={indexColumn} className='px-1 py-3'>{column.render ? <div className='w-full d-flex justify-content-center'>{column.render(item)}</div> : item[column.keyName]}</td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
        {/* #endregion table */}
        {/* #region paginator */}
        {_filtredSearch().length > itemsPerPage && <div className='paginator'>
            <div className='flex justify-center'>
                <button className='paginator-button' type="button" disabled={currentPage <= 1} onClick={() => _changePage(currentPage - 1)}>
                    <svg className='w-6 h-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                        <path d='M15 19l-7-7 7-7'></path>
                    </svg>
                </button>
                {_getPreviousConsecutivesCurrentPage().map((page, index) => <button type="button" key={index} className={`paginator-button ${styles.paginatorButton}`} onClick={() => setCurrentPage(page)}>{page}</button>)}
                <span className={`paginator-page  ${styles.paginatorButton} ${styles.active}`}>{currentPage}</span>
                {_getNextConsecutivesCurrentPage().map((page, index) => <button type="button" key={index} className={`paginator-button ${styles.paginatorButton}`} onClick={() => setCurrentPage(page)}>{page}</button>)}
                <button className='paginator-button' type="button" disabled={currentPage*itemsPerPage >= _filtredSearch().length} onClick={() => _changePage(currentPage + 1)}>
                    <svg className='w-6 h-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                        <path d='M9 5l7 7-7 7'></path>
                    </svg>
                </button>
            </div>
        </div>}
        {/* #endregion paginator */}
    </div>
}

export default Table;