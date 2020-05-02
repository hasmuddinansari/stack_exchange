import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function HtmlParsor({ html }) {
    return (
        <>
            {ReactHtmlParser(html)}
        </>
    )
}

