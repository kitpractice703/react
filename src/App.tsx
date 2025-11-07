import { useState } from 'react'
import Step4Effect from './components/Step4Effect'

const App = () => {
  const [showTimer, setShowTimer] = useState<boolean>(true)

  const toggleTimer = () => {
    setShowTimer(prev => !prev)
  }

  return (
    <div>
      <h1>클린업 함수 동작 확인</h1>
      <button onClick={toggleTimer}>
        {showTimer ? '타이머 숨기기' : '타이머 보이기'}
      </button>
      {showTimer && <Step4Effect />}
      <p>
        버튼을 눌러 위 타이머 컴포넌트(Step4Effect)를 숨기거나 보이게 해보세요.
        <br />
        콘솔을 열어보시면 클린업 함수가 언제 실행되는지 알 수 있습니다.
      </p>
    </div>
  )
}

export default App
