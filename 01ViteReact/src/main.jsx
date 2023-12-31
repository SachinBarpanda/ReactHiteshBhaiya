import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp(){
    return (
        <div>
            <h1>Custom App | Chai aur React</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank' >Visit Google</a>
)

const reactElement = React.createElement(
    'a',{
        href:'https:www.reddit.com',
        target:'_blank'
    },
    'click me to use google',
    anotherElement
)


ReactDOM.createRoot(document.getElementById('root'))
.render(
    // <App />
    // myApp()
    // anotherElement,
    reactElement
)
