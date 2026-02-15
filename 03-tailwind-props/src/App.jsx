import Card from './components/Card'

function App() {
  // let anotherArr = [4, 5, 6];
  // let testObj = {
  //   name: "kenny",
  //   role: "student"
  // };

  return (
    <>
    <div className="main-container">
      <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind CSS</h1>
      {/* <Card topic="Card 1" myArr={[1, 2, 3]} myArr2={anotherArr} obj={testObj} /> */}
      <Card topic="card 1" btnText="View more"/>
      <Card topic="card 2" btnText="See more"/>
    </div>
    </>
  )
}

export default App
