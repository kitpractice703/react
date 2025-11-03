import type React from 'react'

const App = () => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e)
  }
  return (
    <>
      <button onClick={clickHandler}>클릭</button>
    </>
  )
}

export default App
