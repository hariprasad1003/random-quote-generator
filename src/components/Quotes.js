import React, {useState, useEffect} from 'react';
import './Quotes.css';
import TwitterIcon from '../assets/twitter.svg';

function Quotes() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    
    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        let url=`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url) 
            .then(res => res.json()) 
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random()* dataQuotes.length);
                let randomQuote = dataQuotes[randomNum];
                setQuote(randomQuote.quote);
                setAuthor(randomQuote.author);
            })
    }

    const handleClick = () => {
        getQuote();
    }
    return (
        <div className="quotes">
            <div className="quotes__text">
                <p>{quote}</p>
            </div>

            <div className="quotes__author">
                <p>- {author}</p>
            </div>

            <div className="quotes__buttons">
                <div className="social__media">
                    <a href="#" className="twitter__icon">
                        <span><img src={TwitterIcon} alt="" /></span>
                    </a>
                </div>
                <button onClick= {handleClick}className="new_quote">New Quote</button>
            </div>

            
        </div>
    )
}

export default Quotes;
