import React, { useState, useEffect } from 'react'
// import myData from './data.json'
import top500 from './top500.json'
import axios from 'axios'

import './NewsArticle.css'
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Autocomplete from '@mui/material/Autocomplete';




export default function NewsArticle() {
    //Array with the objects inside of the top 500 fetch 
    const [topObj, setTopObj] = useState([])

    // the top 500 id fetch
    useEffect(() => {
        top500.map((id) => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(res => res.data)
            .then(data => setTopObj((prev) => ([...prev, data]))))
    }, [])

    //Slice to get top 100 from 500 
    // const top99 = topObj.slice(0, 99)
    // const top199 = topObj.slice(100, 199)
    // const top299 = topObj.slice(200, 299)
    // const top399 = topObj.slice(300, 399)
    // const top499 = topObj.slice(400, 499)

    const [search, setSearch] = useState(null)
    function handleChange(e) {
        setSearch(e.target.value.toLowerCase()) //SETS Input to lowercase so we can search
        if (e.target.value === "") {
            setSearch(null)
        }
    }

    const [display, setDisplay] = useState(false)

    function handleClick(e) {
        const value = e.target.value
        setDisplay(topObj.slice(value - 30, value))
        e.target.innerText = "you are here"
    }
    return (
        <>
            {/* MUI IMPORTED */}
            {/* {topObj &&
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={topObj.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            onChange={handleChange}
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />}
            {topObj && <List >
                {topObj.map((hit) => (
                    hit.title.toLowerCase().includes(`${search}`) ?
                        <ListItem>
                            <a href={hit.url}>({hit.title})</a>
                        </ListItem>
                        :
                        ""

                ))}
            </List>} */}
            {/* MUI IMPORTED */}
            <ol className='ordered_list'>
                {display !== false ? display.map((ele) => (
                    <li key={ele.id}><div className='Article-container'>
                        <div className='title-url'>
                            <p>{ele.title}</p>
                            <a href={ele.url}>({ele.url})</a>
                        </div>
                        <div className='Description'>
                            <p>{ele.score} points by:<a href={`https://hacker-news.firebaseio.com/v0/user/${ele.by}.json?print=pretty`}>{ele.by}</a> Created at :{Date(ele.time * 1000).slice(3, 15)}</p>
                            {console.log(ele)}
                        </div>
                    </div>
                    </li>))
                    :
                    <div className='center-loading'>
                        <span class="loader"></span>
                        <h2>Loading...</h2></div>
                }
            </ol>


            <button value={false} onClick={() => setTopObj(false)}>false</button>
            <button value={30} onClick={handleClick}>30</button>
            <button value={60} onClick={handleClick}>60</button>
            <button value={90} onClick={handleClick}>90</button>
            <button value={120} onClick={handleClick}>120</button>
            <button value={150} onClick={handleClick}>150</button>

        </>
    )
}


