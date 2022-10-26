import React, { useState, useEffect } from 'react'
import myData from './data.json'
import './NewsArticle.css'


export default function NewsArticle() {
    const [search,setSearch] = useState(null)
    // const [data, setData] = useState(0)
    // useEffect(()=>{
    //     const url = '.';
    //     fetch(url)
    //     	.then(res => res.json())
    //         .then(data => setData(data))
    // },[])
    const { hits } = myData;
function handleChange(e){
setSearch(e.target.value)
if(e.target.value === ""){
    setSearch(null)
}
}
    // myData

    return (
        <>
        <input onChange={handleChange} type="text"></input>
            {hits.map((hit) => (
            hit.title.includes(`${search}`) ?
            <p>
            <a href={hit.url}>({hit.title})</a>
            </p>
        :
        ""
    
            ) )}
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
                            {/* {hit._tags.map(tag => (<p>Tag: {tag}</p>))}                  creates Tags */}
                        </div>
                    </div>
                    </li>

                ))}
            </ol>
                :
                <div className='center-loading'>
                <span class="loader"></span>
                <h2>Loading...</h2></div>
            }



        </>
    )
}


