import Document, {Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document{
    render(){
        return(
            <Html lang='en'>
                <Head/>
                <link rel="icon" type="image/svg+xml" href="/img/favicon.svg"/>
                <link rel="icon" type="image/png" href="/img/favicon.png"/>
                <body>
                    <Main/>
                    <NextScript/>
                    <div id='modal'></div>
                    <div id='menu'></div>
                    <div id='popup'></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument;