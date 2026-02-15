import { useState } from 'react'

function App() {
  const colors = [
    { name: "Red", hex: "#FF0000", textColor: "white" },
    { name: "Green", hex: "#008000", textColor: "white" },
    { name: "Blue", hex: "#0000FF", textColor: "white" },
    { name: "Olive", hex: "#808000", textColor: "white" },
    { name: "Grey", hex: "#808080", textColor: "white" },
    { name: "Yellow", hex: "#FFFF00", textColor: "black" },
    { name: "Pink", hex: "#FFC0CB", textColor: "black" },
    { name: "Purple", hex: "#800080", textColor: "white" },
    { name: "Lavender", hex: "#E6E6FA", textColor: "black" },
    { name: "White", hex: "#FFFFFF", textColor: "black" },
    { name: "Black", hex: "#000000", textColor: "white" }
  ];


  const [bgColor, setBgColor] = useState("#000000");

  function changeColor(color) {
    setBgColor(color);
  }

  let buttonsList = [];
  document.body.style.backgroundColor = bgColor;
  
  colors.forEach(color => {
    buttonsList.push(<button key={color.name} className="px-[10px] py-[6px] rounded-xl" style={{ backgroundColor: color.hex, color: color.textColor }} onClick={() => changeColor(color.hex)}>{color.name}</button>);
  })

  return (
    <>
      <div className="main-container">
        <nav className='bg-white p-[10px] rounded-xl shadow-md flex items-center justify-between'>
          {buttonsList}
        </nav>
      </div>
    </>
  )
}

export default App
