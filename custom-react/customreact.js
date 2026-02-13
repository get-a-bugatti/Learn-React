const mainContainer = document.getElementById("root");

function render(reactElement, mainContainer) {
  const domEl = document.createElement(reactElement.type);
  for (const prop in reactElement.props) {
    domEl.setAttribute(prop, reactElement.props[prop]);
  }
  domEl.innerHTML = reactElement.children;

  mainContainer.appendChild(domEl);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click here to visit google.",
};

render(reactElement, mainContainer);
