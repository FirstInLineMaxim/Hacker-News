import React, { useState, useEffect } from 'react'
import myData from './data.json'
import chuck from './chuk.json'
import './NewsArticle.css'


export default function NewsArticle() {
    // const [data, setData] = useState(0)
    // useEffect(()=>{
    //     const url = '.';
    //     fetch(url)
    //     	.then(res => res.json())
    //         .then(data => setData(data))
    // },[])
    const {hits} = myData;
    // console.log(hits)
    console.log(chuck.value)

  return (
    <>
    <ol className='ordered_list'>
    {hits.map((hit)=>(
 
    <li><div className='Article-container'>
            <div className='title-url'>
                <h3>{hit.title}</h3>
            <a href={hit.url}>({hit.url})</a>
            </div>
            <div className='description'>
                <p>author: {hit.author}</p>
                <p>Created: {hit.created_at}</p>
            </div>
        </div>
        </li>
        
        ))}
        </ol>
    {/* <h1>{chuck.value}</h1>
    <img src={chuck.icon_url} alt="" /> */}

    
    </>
  )
}
