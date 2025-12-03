const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
  <div>
    <Header course={course}/>
   <Content part1 ={part1} exercises1= {exercises1} part2 = {part2} exercises2 ={exercises2} part3 = {part3} exercises3={exercises3} />
    <Total exercises1 = {exercises1} exercises2= {exercises2} exercises3={exercises3}/>
   
  </div>
  )
}

const Header = (course) => {
  return (
    <div>
      <h1>{course = 'Half stack application development'}</h1>
    </div>
  )
}
const Content = (content) => {
  return(
    <div>
      <p>{content.part1} {content.exercises1}</p>
      <p>{content.part2} {content.exercises2}</p>
      <p>{content.part3} {content.exercises3}</p>
    
    </div>
 
  )

  

}
const Total = (exercises) => {
  return (
    <div><p>Number of Exercises {exercises.exercises1 +exercises.exercises2 +exercises.exercises3}</p>  </div>
  )
}





export default App
