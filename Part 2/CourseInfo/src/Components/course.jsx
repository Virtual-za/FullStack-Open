const Course = ({ course }) => {

  return (

    <div>
      <Header courseName={course.name} />
      <Parts name={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Parts name={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Parts name={course.parts[2].name} exercises={course.parts[2].exercises}/>
    </div>


  )
} 

const Header = (props) => {
 
  return (
    <h1>{props.courseName}</h1>
  )
} 
const Parts = ({name,exercises}) => {
    return (
        <p>{name} {exercises}</p>
    )
}







export default Course
// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   )
// }
// const Content = (props) => {
//   return (
//   <div>
//  <Part part={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
//   <Part part={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
//    <Part part={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
//   </div>  
//   )
     
    
// }

// const Total = (props) => {
//   return (
//     <p>Number of Exercises {props.parts[0].exercises + props.parts[1].exercises+props.parts[2].exercises}</p>
//   )
// }








