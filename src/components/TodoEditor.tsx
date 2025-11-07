import { useState } from 'react'
import Button from './html/Button'
import Input from './html/Input'

// addTodo 함수는 새로운 할 일을 등록하는 역할
// 이 함수를 TodoEditor 컴포넌트에서 사용할 수 있도록 하기 위해
// props로 전달받는다.
// 앞에서 addTodo 함수의 타입이 void로 설정되어 있다

//아래 확인해보기
const TodoEditor = ({ addTodo }: { addTodo: (title: string) => void }) => {
  const [text, setText] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 웹 브라우저의 기본 동작을 하지 못하도록 한다.
    // add 버튼을 누르면 새로고침이 되면서 추가로했던 게 나와야하는데
    // 아예 새로고침이 되면서 개발자가 원했던 명령은 없어지게 된다.
    // 그것을 방지하기 위해 최상단에 있어야함.
    if (!text.trim()) return
    // 앞 뒤 띄어쓰기가 없을 경우 참. trim**
    addTodo(text)
    setText('')
  }

  return (
    <form className={'todo__form'} onSubmit={handleSubmit}>
      <div className="todo__editor">
        {/* 유효성 검사 넣어보기 */}
        <Input
          type="text"
          className="todo__input"
          placeholder="Enter Todo List"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button className="todo__button" type="submit">
          Add
        </Button>
      </div>
    </form>
  )
}

export default TodoEditor
