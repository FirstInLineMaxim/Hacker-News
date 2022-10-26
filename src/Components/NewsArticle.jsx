import React, { useState, useEffect } from 'react'
import myData from './data.json'
import './NewsArticle.css'


export default function NewsArticle() {
    // const [data, setData] = useState(0)
    // useEffect(()=>{
    //     const url = '.';
    //     fetch(url)
    //     	.then(res => res.json())
    //         .then(data => setData(data))
    // },[])
    const { hits } = myData;


    return (
        <>
            {hits ? <ol className='ordered_list'>
                {hits.map((hit) => (

                    <li><div className='Article-container'>
                        <div className='title-url'>
                            <h3>{hit.title}</h3>
                            <a href={hit.url}>({hit.url})</a>
                        </div>
                        <div className='description'>
                            <p>Author: {hit.author}</p>
                            <p>Created: {hit.created_at.slice(0, 10)}</p>                {/*Cuts date till 10 digits*/}
                            {hit._tags.map(tag => (<p>Tag: {tag}</p>))}                  {/*creates Tags*/}
                        </div>
                    </div>
                    </li>

                ))}
            </ol>
                :
                <h2>Loading...</h2>
            }

            {/* <h1>{chuck.value}</h1>
    <img src={chuck.icon_url} alt="" /> */}


        </>
    )
}


