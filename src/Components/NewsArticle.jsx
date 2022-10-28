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
    // const objct = []
    // const [top500, setTop500] = useState()
    // useEffect(() => {
    //     axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    //         .then(res => res.data)
    //         .then(data => setTop500((prev) => ([...prev, data])))
    // }, [])

    //Array with the objects inside of the top 500 fetch 
    const [topObj, setTopObj] = useState([])
    // the top 500 id fetch
    useEffect(() => {

        top500.map((id) => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => res.data).then(data => setTopObj((prev) => ([...prev, data]))))
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

    const [display, setDisplay] = useState([])

    function handleClick(e) {
        const value = e.target.value
        setDisplay(topObj.slice(value))
        console.log(value)


    }
    return (
        <>
            {/* MUI IMPORTED */}
            {topObj &&
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
            </List>}
            {/* MUI IMPORTED */}
            {/* <button onClick={consolees}>console.log</button> */}
            <ol className='ordered_list'>
                {display !== [] ? display.map((ele) => (<li><div className='Article-container'>
                    <div className='title-url'>
                        <h3>{ele.title}</h3>
                        <a href={ele.url}>({ele.url})</a>
                    </div>
                </div>
                </li>)) : <div className='center-loading'>
                    <span class="loader"></span>
                    <h2>Loading...</h2></div>
                }
            </ol>


            <button value={false} onClick={() => setTopObj(false)}>false</button>
            <button value={0} onClick={handleClick}>0-50</button>
            <button value={50} onClick={handleClick}>50-100</button>
            <button value={100} onClick={handleClick}>100-150</button>
            <button value={150} onClick={handleClick}>150-200</button>
            <button value={200} onClick={handleClick}>200-250</button>

        </>
    )
}


