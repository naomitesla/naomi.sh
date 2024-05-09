import React, { useState, useEffect } from 'react';
import Parser from 'html-react-parser';

interface args {
  text: string;
}


export default function Console({ text }: args) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 10;
  const red = '<b>'
  // should probably figure out the variable naming to display desync thingy at some point :o
  const ps1 = 'user0001' + red + '@</b>naomi-sh' + red + ':</b>~' + red + '$</b>&nbsp;';

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      {Parser(ps1)}{Parser(currentText)}
    </>
  );
}
