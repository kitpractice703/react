import Button from './html/Button'
import CheckBox from './html/CheckBox'
import SvgClose from './svg/SvgClose'
import SvgPencil from './svg/SvgPencil'

const TodoListItem = ({ todo }: { todo: Todo }) => {
  return (
    <li className={`todo__item ${todo.done && 'todo__item--complete'}`}>
      <CheckBox
        parentClassName="todo__checkbox-group"
        type="checkbox"
        className="todo__checkbox"
      >
        {todo.title}
      </CheckBox>

      {/* 이 컴포넌트는 props로 todo 객체를 전달받는다. */}
      {/* todo 객체: 하나의 할 일 정보를 담고 있다. - id title done */}
      {/* 이 중에서 done의 값이 true이면 - 할 일을 완료 */}
      {/* li 요소에 todo__item--complete라는 클래스를 추가한다.. */}
      {/* doto.title 내용 */}

      <div className="todo__button-group">
        <Button className="todo__action-button">
          <SvgPencil />
        </Button>
        <Button className="todo__action-button">
          <SvgClose />
        </Button>
      </div>
    </li>
  )
}

export default TodoListItem
