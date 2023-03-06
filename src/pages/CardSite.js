import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSelectCard} from "../components/store/cardSlice";
import {Navigate, useNavigate, useParams} from "react-router-dom";

const CardSite = () => {
    const {id}=useParams()
    const dispatch = useDispatch()
    const {selectCard} = useSelector(state=>state.newReducer)
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(getSelectCard(id))
    },[])

    return (
        <div>
            <button onClick={()=>navigate(-1)}>назад</button>
            <img src={selectCard.image}/>
            <h1>{selectCard.title}</h1>
        </div>
    );
};

export default CardSite;