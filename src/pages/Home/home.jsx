import React from 'react';
import Poster from "../Assets/Poster.png"
import Tv from "../Assets/tv.png"
import icon from "../Assets/icon.png"
import tom from "../Assets/tom.png"
import styled from "styled-components";
import {FaSearch,FaGripLines,FaChevronRight} from "react-icons/fa"
import Card from '../../components/Card';

const Home = () => {
    return (
        <HomeContainer>
            <div className="header">
                <div className="nav">
                    <div className="appTitle">
                        <img src={Tv} alt="logo" />
                        <h2>MovieBox</h2>
                    </div>
                    <div className="searchBar">
                        <input 
                        type="text"
                        placeholder='What do you want to watch ?'
                         />
                         <FaSearch color={"white"}/>
                    </div>
                    <div className="right">
                        <button>Sign in</button>
                        <div className="menu">
                            <FaGripLines/>
                        </div>
                    </div>
                </div>
                <div className="body">
                   <div className="left">
                        <div className='content'>
                                <h2>John Wick 3: <br/> Parabellum</h2>
                            <div className='sect1'>
                                <p className='IMMOB'>IMOb</p>
                                <p>86.0/100</p>
                                <p> <img src={tom} alt="" /> 97% </p>
                            </div>
                            <p>
                             John Wick is on the run after killing 
                             a member of the international assassins'
                             guild, and with a $14 million price tag 
                             on his head, he is the target of hit men 
                             and women everywhere.
                            </p>
                            <button>
                                <img src={icon} alt="icon" />
                                WATCH TRILLER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movies">
                <div className="Head">
                    <h2>Featured Movie</h2>
                    <button>See More <FaChevronRight/></button>
                </div>
                <div className="body">
                    <Card/>
                </div>
            </div>
        </HomeContainer>
    );
}

export default Home;
const HomeContainer= styled.div `

.header{
    padding:12px;
    height:400px;
    margin:0;
    background:red;
    display:flex;
    flex-direction:column;
    background:url(${Poster});
    background-size:cover;
    .nav{
        display:flex;
        padding-right:30px;
        padding-left:30px;
        align-items:center;
        justify-content:space-between;
        width:100%;
        height:50px;
    .appTitle{
        display:flex;
        align-items:center;
        gap:18px;
        color:white;
        img{
            width:40px;
        }
    }
    .searchBar{
        width:40%;
        padding:5px;
        border-radius:8px;
        display:flex;
        justify-content:center;
        align-items:center;
        border:1px solid white;

        input{
            width:100%;
            background:none;
            color:white;
            border:none;
            outline:none;
        }
     
    }
    .right{
        color:white;
        display:flex;
        gap:18px;

        .menu{
            background:#BE123C;
            width:30px;
            height:30px;
            cursor:pointer;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:50%;
        }
        button{
            background:none;
            border:none;
            cursor:pointer;
            font-size:15px;
            font-weight:bold;
            color:white;
        }
    }
    }
    .body{
        display:flex;
        gap:18px;
        height:100%;
        justify:content:center;
       
        .left{
            color:white;
            width:600px;
            display:flex;
            justify-content:center;
            align-items:center;
        .content{
            display:flex;
            gap:12px;
            width:400px;
            flex-direction:column;
            div{
                display:flex;
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
            button{
                width:170px;
                display:flex;
                height: 36px;
                padding: 6px 16px 6px 16px;
                border-radius: 6px;
                gap: 8px;
                font-size: 14px;
                font-weight: 700;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: left;
                align-items:center;
            }
        }
        }
    }
}

.movies{
    display:flex;
    flex-direction:column;
    padding:30px;
    .Head{
        display:flex;
        justify-content:space-between;
        padding:12px;
        h2{
            font-size: 36px;
            font-weight: 700;
            line-height: 47px;
            letter-spacing: 0em;
            text-align: left;
        }

        button{
            background:none;
            color:#BE123C;
            display:flex;
            gap:12px;
            font-size:16px;
            display:flex;
            align-items:center;
            font-size: 15px;
            font-weight: 700;
            line-height: 47px;
            &:hover{
                font-size: 17px;
            }

        }
    }
}
`