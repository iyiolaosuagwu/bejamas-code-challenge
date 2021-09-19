import Image from 'next/image';
import React, { useState } from 'react'

import ForwardIcon from '../public/forward.svg'
import BackwardIcon from '../public/backward.svg'

interface Props {
    data: any[],
    RenderComponent: any,
    pageLimit: number,
    dataLimit: number,
    addTCart: (item: any) => void,
}


const Pagination: React.FC<Props> = ({ data, RenderComponent, pageLimit, dataLimit, addTCart }) => {

    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState<number>(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill(5).map((_, idx) => start + idx + 1);
    };

    return (
        <div>
            <div className="row">
                {getPaginatedData().sort().map((el, index) => {
                    return (
                        <div key={index} className="col-md-6 col-lg-4 col-sm-12">
                            <RenderComponent addTCart={addTCart} key={index} data={el} />
                        </div>
                    )
                })}
            </div>

            {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
            <div className="pagination">
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                    disabled={currentPage === 1}
                >
                    <Image src={BackwardIcon} />
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                    disabled={currentPage === pages}
                >
                    <Image src={ForwardIcon} />
                </button>
            </div>
        </div>
    );
}

export default Pagination

