import React, {Component} from 'react'

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    if(this.state.name == '' || this.state.phone == '') {
      alert('이름 혹은 전화번호를 입력해주세요.')
      return;
    }
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    )
  }
}

export default PhoneForm;