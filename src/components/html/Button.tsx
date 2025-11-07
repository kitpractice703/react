type Buttonprops = React.ComponentPropsWithRef<'button'>
// type: 타입스크립트에서 컴포넌트를 만드는 경우에도 반드시 형태를 미리 선언하여야한다.
// html의 button태그가 가지고 있는 모든 내용을 그대로 사용할 수 있도록 한다.
// onClick, disable... 기본적인 속성이 있는데 기본 베이스로 하고가자..?

const Button = ({ children, ...rest }: Buttonprops) => {
  // const [children, ...rest] = props
  // 위 라인은 구조분해할당 사용하는 것이다.
  // childen:<button>태그 내부에 들어가는 내용>텍스트 또는 아이콘
  // ...rest>그대로라는 말은 맞지만 텍스트 or 아이콘과 같은 정보를 제외한 것은 모두 여기 담는다.

  return (
    <button {...rest}>{children}</button>
    // children 사용한 이유에 대해..
    // 내가 나를 만든다 x / 실제 html tag를 렌더링해서 반환한다
  )
}

export default Button
