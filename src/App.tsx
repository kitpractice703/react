import { useState } from 'react'

const App = () => {
  const [state, setState] = useState({
    currentNumber: '0',
    // 키         : 값
    previousNumber: '',
    operation: null,
    isNewNumber: true,
  })

  const handleClear = () => {
    console.log('clear')
  }
  const handleDot = () => {
    console.log('dot')
  }

  //<HTMLInputElement, MouseEvent> 여기 안에서 발생되는 이벤트만 작동
  const handleNumber = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    console.log(event.currentTarget.value)
    const value = event.currentTarget.value
    if (state.isNewNumber) {
      // 숫자 덮어쓰기
      setState({
        ...state,
        currentNumber: value,
        isNewNumber: false,
      })
    }
    //숫자 이어붙이기
    // ... state 숙지하기**
    else {
      setState({
        ...state,
        currentNumber: state.currentNumber + value,
      })
    }
  }

  const handleOperator = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    operation
    console.log(event.currentTarget.value)
  }

  return (
    <article className="calculater">
      <form name="forms">
        <input type="text" name="output" value={state.currentNumber} readOnly />

        <input
          type="button"
          className="clear"
          value="C"
          onClick={handleClear}
        />
        <input
          type="button"
          className="operator"
          value="/"
          onClick={handleOperator}
        />
        <input type="button" value="1" onClick={handleNumber} />
        <input type="button" value="2" onClick={handleNumber} />
        <input type="button" value="3" onClick={handleNumber} />
        <input
          type="button"
          className="operator"
          value="*"
          onClick={handleOperator}
        />
        <input type="button" value="4" onClick={handleNumber} />
        <input type="button" value="5" onClick={handleNumber} />
        <input type="button" value="6" onClick={handleNumber} />
        <input
          type="button"
          className="operator"
          value="+"
          onClick={handleOperator}
        />
        <input type="button" value="7" onClick={handleNumber} />
        <input type="button" value="8" onClick={handleNumber} />
        <input type="button" value="9" onClick={handleNumber} />
        <input
          type="button"
          className="operator"
          value="-"
          onClick={handleOperator}
        />
        <input type="button" className="dot" value="." onClick={handleDot} />
        <input type="button" value="0" onClick={handleNumber} />
        <input
          type="button"
          className="operator result"
          value="="
          onClick={handleOperator}
        />
      </form>
    </article>
  )
}

export default App

//데이터 바인딩 *연결
//엑셀에서 시트별로 연동하는 방식이랑 비슷한 것
