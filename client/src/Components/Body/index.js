import React from 'react';
import './index.css';
import Card from '../Card';

const Body = ({ newsArticles = [{}], keyword = '' }) => {
    return (
        <div>
            {keyword ? <p className='p'> Keyword Searched : {keyword} </p> : <p className='p'> Latest News : </p>}
            {/* Conditional rendering */}
            {newsArticles ? (
                <div className="cards">
                    {newsArticles.map((item, index) => (
                        // Card component is a reusable component which takes in few props to display
                        <Card title={item.title} img={item.urlToImage} text={item.content} link={item.url} key={index} />
                    ))}
                </div>
            ) : (<div>
                {/* Can place a common component below which can be shown during error or no data - error boundaries */}
                NO NEWS TO SHOW
            </div>)}
        </div>
    );
};
export default Body;