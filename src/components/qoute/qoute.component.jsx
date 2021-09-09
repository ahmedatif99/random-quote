import React, { useEffect, useState } from "react";

import {
  QouteBox,
  QouteText,
  QouteAuthor,
  QouteButtons,
  QouteSocialMedia,
  QouteSocialMediaLinks,
  QouteSocialMediaImages,
  NextQouteButton,
} from "./qoute.styles";

import Tumblr from "../../tumblr.svg";
import Twitter from "../../twitter.svg";

const Qoutes = () => {
  const [qoute, setQoute] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        console.log(randomQuote.quote);
        console.log(randomQuote.author);

        setQoute(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <QouteBox>
      <QouteText>
        <p>{qoute}</p>
      </QouteText>

      <QouteAuthor>
        <p>{author}</p>
      </QouteAuthor>

      <QouteButtons>
        <QouteSocialMedia>
          <QouteSocialMediaLinks>
            <span>
              <QouteSocialMediaImages src={Tumblr} alt="Tumblr Link" />
            </span>
          </QouteSocialMediaLinks>

          <QouteSocialMediaLinks>
            <span>
              <QouteSocialMediaImages src={Twitter} alt="Twitter Link" />
            </span>
          </QouteSocialMediaLinks>
        </QouteSocialMedia>

        <NextQouteButton onClick={handleClick}>New Qoute</NextQouteButton>
      </QouteButtons>
    </QouteBox>
  );
};

export default Qoutes;
