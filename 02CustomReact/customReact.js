
function customRender(reactElement, container){
    // const domElement  = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    
    // console.log(domElement)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const item in reactElement.props){
        domElement.setAttribute(item,reactElement.props[item]);
    }
    container.appendChild(domElement);
}


const reactElement = {
    type:'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to use google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);


