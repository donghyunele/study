import React, {Component} from 'react'

// class MyName extends Component {
//   render() {
//     return (
//       <div>
//         안녕하세요 제 이름은 <b>{this.props.name}</b> 입니다.
//       </div>
//     )
//   }
// }

//함수형 컴포넌트
const MyName = ({ name }) => {
  return (
    <div>제 이름은 {name} 입니다!</div>
  )
}
export default MyName;