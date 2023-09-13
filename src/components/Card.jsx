import React from 'react'
import styled from "styled-components"
import post from "../pages/Assets/test.png"
import tom from "../pages/Assets/tom.png"
import {FaHeart} from "react-icons/fa"
const Card = () => {
    return (
        <StyledCard>
            <div className="image">
                <div>
                    <span>
                        <FaHeart />
                    </span>
                </div>
            </div>
            <div className="infos">
                <p>USA, 2015</p>
                <h3>Stranger Things</h3>
                 <div className='sect1'>
                    <p className='IMMOB'>IMOb</p>
                    <p>86.0/100</p>
                    <p> <img src={tom} alt="" /> 97% </p>
                 </div>
                 <p>Action,Adventure,Horror</p>
            </div>
        </StyledCard>
    );
}

export default Card;
const StyledCard= styled.div `

width:230px;
margin-bottom:8px;
cursor:pointer;


.image{
    background:url(${post});
    height:300px;
    background-size:cover;
    width:230px;

    div{
        width:100%;
        display:flex;
        justify-content:right;
        padding:15px;
        span{
            background:rgba(244, 243, 241, 0.256);
            cursor:pointer;
            height:30px;
            width:30px;
            color:#fff;
            align-items:center;
            display:flex;
            justify-content:center;
            border-radius:50%;

            &:hover{
                color:#eda005e6;
            }
        }
      
    }


}
.infos{
    margin-top:12px;
    display:flex;
    gap:8px;
    flex-direction:column;
    p{
        color:gray;
        font-size:10px;
    }
    .sect1{
        display:flex;
        gap:8px;
        font-size:12px;
        align-items:center;

        .IMMOB{
            background:#c9af09;
            color:black;
            padding:3px;
            border-radius:3px;
        }
        p{
            display:flex;
            align-items:center;
            gap:5px;
        }
    }
}


`