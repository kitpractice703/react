const User = ({
  userObj,
  clickHandler,
}: {
  userObj: { name: string; age: number }
  clickHandler: () => void
}) =>
  // => 대한 의미 숙지하기
  {
    return (
      <>
        <p>이름: {userObj.name}</p>
        <p>나이: {userObj.age}</p>
        <button onClick={clickHandler}>클릭</button>
      </>
    )
  }

export default User
