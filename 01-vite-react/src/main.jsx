
import { createRoot} from 'react-dom/client'
import { createElement } from 'react'


// function Test() {
//     return <h1>This is a test header.</h1>
// }

const reactElement = {
    type: "a",
    props: {
      href: "https://www.google.com",
      target: "_blank",
    },
    children: "Click here to visit google.",
  };


const AnotherReactEl = createElement(
    'a', 
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    "Click here to visit google"
)

function Main() {
    const username = "kenny3135";

    return (
        <h1>Username is : {username}</h1>
    );
}

// function Test() {
//     return AnotherReactEl;
// }

createRoot(document.getElementById('root')).render(
    <>
        {AnotherReactEl}
        <Main />
    </>
)
