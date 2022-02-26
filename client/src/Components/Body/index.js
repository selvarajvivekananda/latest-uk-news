import React from 'react';
//import { Card, Button } from 'react-bootstrap';
import './index.css';
import Card from '../Card'
const Body = ({ newsArticles, keyword = '' }) => {
    return (
        <div>
            {keyword && <p className='p'> Keyword Searched : {keyword} </p>}
            {newsArticles ? (
                <div className="cards">
                    {newsArticles.map((item, index) => (
                        <Card title={item.title} img={item.urlToImage} text={item.content} link={item.url} key={index} />
                    ))}
                </div>
            ) : (<div>
                NO DATA TO SHOW
            </div>)}
        </div>
    );
};
export default Body;