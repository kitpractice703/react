type CheckBoxprops = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type?: 'checkbox'
  parentClassName: string
}

//parentClassName: string = pattern 패턴 / 관습적으로 쓴다정도로.. 이해해보기*

const CheckBox = (props: CheckBoxprops) => {
  const { parentClassName, children, ...rest } = props

  return (
    <div className={parentClassName}>
      <input {...rest} />
      <label>{children}</label>
    </div>
  )
}

export default CheckBox
