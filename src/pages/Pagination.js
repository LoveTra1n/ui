import React, {useEffect, useState} from 'react';
import Cards from "../components/card/Cards";
import PugFunc from "../components/PagFunc/PugFunc";
import "../App.css"

const Pagination = () => {
    const [arr,setArr]=useState([])

    const [currentPage,setCurrentPage]=useState(1)
    const [cardsPerPage]=useState(5)



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                setArr(data)
            })

    }, [])

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    const currentCard = arr.slice(firstCardIndex,lastCardIndex)

    const paginate= pageNumber =>{ setCurrentPage(pageNumber)}


    return (
        <div className={"Pagination"}>
            <h1>Pagination</h1>
            <div className="pag-list">
                {currentCard.map(current =><Cards item={current} />)}
            </div>
            <PugFunc cardsPerPage={cardsPerPage} totalCards={arr.length} paginate={paginate}/>

        </div>
    );
};

export default Pagination;