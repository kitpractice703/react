import TodoListItem from './TodoListItem'
import TodoListItemEmpty from './TodolistItemEmpty'

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul className="todo__list">
      {todos.length === 0 && <TodoListItemEmpty />}
      {todos.length > 0 &&
        todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      {/* map : 처음부터 마지막까지 하나씩 순회하는 작업을 시키는 명령 */}

      {/* todos의 길이가 0보다 큰 상태에서 할일이 존재한다 = 참 */}
      {/* map(메소드) 함수를 이용해서 모든 것을 하나씩 순회해서 작업한다 */}
      {/* 순회할 때마다 그 항목을 TodoListItem 컴포넌트 형태로 출력 */}
      {/* 이때 리액트가 하나씩 구별하기 위해 key라는 속성에 고유한 값인 id를 지정한다..? */}
      {/* todo라는 객체 전체를 props로 전달한다. */}

      {/* <TodoListEmpty />
      <TodoListItem /> */}
    </ul>
  )
}

export default TodoList

// 할 일 목록에서 할 일이 없는 경우를 다시 TodoListEmpty로 분리해보기 / 완료

//  {/* 할 일 목록 */}
// <ul className="todo__list">
//         {/* 할 일 목록이 없는 경우 */}
//         <li className="todo__item todo__item--empty">
//           <p className="todo__text--empty">There are no registered tasks</p>
//         </li>
//         {/* 할 일 목록이 있는 경우 */}
//         {/* 할 일을 완료하면 .todo__item--complete 추가 */}
//         <li className="todo__item todo__item--complete">
//           <CheckBox
//             parentClassName="todo__checkbox-group"
//             type="checkbox"
//             className="todo__checkbox"
//             checked
//           >
//             Eat Breakfast
//           </CheckBox>

//           {/* <div className="todo__checkbox-group">
//             <input type="checkbox" className="todo__checkbox" checked />
//             <label>Eat Breakfast</label>
//           </div> */}
//           {/* 할 일을 수정할 때만 노출 */}
//           {/* <input type="text" className="todo__modify-input" /> */}
//           <div className="todo__button-group">
//             <Button className="todo__action-button">
//               <SvgPencil />
//             </Button>
//             <Button className="todo__action-button">
//               <SvgClose />
//             </Button>
//           </div>
//         </li>
//       </ul>
