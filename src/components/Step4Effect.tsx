import { useEffect, useState } from 'react'

const Step4Effect = () => {
  const [second, setSecond] = useState<number>(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecond(prevSeconds => prevSeconds + 1)
      console.log(`현재시간: ${new Date().toLocaleDateString()}`)
    }, 1000)
    return () => {
      console.log(`클린업 함수 실행. 타이머를 정리`)
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
      <h3>클린업 - 뒷 정리(청소)</h3>
      <p>현재 경과 시간: {second}</p>
      <p>
        이 컴포넌트가 사라지거나 `seconds`가 변경되면, 이전 타이머는 정리될
        거예요. 콘솔을 확인해보세요.
      </p>
    </>
  )
}

export default Step4Effect
