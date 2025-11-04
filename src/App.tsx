import { useReducer } from 'react'

function counterReducer(
  state: { count: number },
  action: { type: 'increment' } | { type: 'decrement' } | { type: 'reset' } ) {count: number}


switch (action.type) {
  case 'increment':
    return { count: state.count + 1 }
  case 'decrement':
    return { count: state.count - 1 }
    case 'reset':
    return { count: (state.count = 0) }
  default:
    throw new Error('알 수 없는 액션 타입입니다.')
}
//throw = 예외

const App = () => {
  
  const initalState: { count: number } = { count: 0}
  const [state. dispatch] = useReducer(counterReducer, initalState)

  return (<>
  <p>현재 상태: {state.count} </p>
  <button onClick={() => dispatch({type: 'increment'})}>증가</button>
  <button onClick={() => dispatch({type: 'decrement'})}>감소</button>
  <button onClick={() => dispatch({type: 'reset'})}>초기화</button>
  
  </>)
}

// useReducer를 부르는 주문이다.
// counterReducer <실질적으로 작업을 하는 심부름꾼
// 진행하는 심부름꾼에게 초기값이 initialState 에 들어있다.

// 항상 두가지 정보를 반환한다..
// 1. 심부름꾼이 관리하고 있는 것의 상태
// 2. 심부름꾼에게 일을 시킬 수 있는 작동 버튼

export default App
