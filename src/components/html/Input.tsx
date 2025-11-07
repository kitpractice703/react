type Inputprops = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type?: 'text'
}

// Omit: 해당 타입에서 특정한 속성만 제외한 새로운 타입을 만들때 사용
// 위 내용은 type을 제외했고 & 는 intersection역할
// type은 text로 만족해야한다.
// ?는 이 속성이 선택적임의 의미.

const Input = (props: Inputprops) => {
  const { ...rest } = props

  return <input {...rest} />
}

// children 안들어간 이유 :
// button은 기입할 단어가 있어야하지만 input은 기입할 단어가 필요없음.

export default Input
