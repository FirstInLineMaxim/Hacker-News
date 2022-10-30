import React from 'react';
import './Main.css'
import NewsArticle from './NewsArticle';

export default function Main() {
    return (
       <>
            <div>
                {/* TODAY NEWS */}
                <div><NewsArticle/></div>
                {/* TOP NEWS */}
                <div>Top News</div>
            </div>
       </>
    );
}
