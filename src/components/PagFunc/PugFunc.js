import React from 'react';

const PugFunc = ({cardsPerPage, totalCards,paginate}) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage) ; i++) {
        pageNumber.push(i)
    }


    return (
        <div>
            <ul className={"pugFunc"}>
                {
                    pageNumber.map(num=>(
                        <li className={"page-num"} key={num}>
                            <a onClick={()=> paginate(num)}>
                                {num}
                            </a>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default PugFunc;