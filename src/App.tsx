import { useState } from 'react'
import TodoEditor from './components/TodoEditor'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (title: string) => {
    setTodos(todos => [
      ...todos,
      //생성되면 부모에게 알려주는 것
      {
        id: new Date().getTime(),
        //id는 Number만 들어가는데 왜 시간이 들어가느냐?
        //day, time 은 숫자계산이 가능.
        title,
        done: false,
      },
    ])
  }

  return (
    <div className="todo">
      <TodoHeader />
      {/* <h1 className="todo__title">Todo List</h1>
      <p className="todo__subtitle">Please enter your details to continue.</p> */}
      <TodoEditor addTodo={addTodo} />
      {/* 할 일 등록 */}
      {/* <form className="todo__form">
        <div className="todo__editor">
          <Input
            type="text"
            className="todo__input"
            placeholder="Enter Todo List"
          />
          <Button className="todo__button" type="submit">
            Add
          </Button>
          {/* html 컴포넌트에서 가져와서 했음 */}
      {/* 의미에 대해 자세히 확인하기  */}
      {/* button > Button 변경됨 */}
      {/* </div>
      </form> */}
      <TodoList todos={todos} />
    </div>
  )
}

export default App
