import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname:"",
      lastname:"",
      email:"",
      password: ""
      
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleFirstNameChange(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  handleLastNameChange(e) {
    this.setState({
lastname: e.target.value
    })
  }
  handlePasswordChange(e) {
    this.setState({
password: e.target.value
    })
  }
  handleEmailChange(e) {
    this.setState({
email: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Register Page</h2>
        <form>
          <label>FirstName</label>
          <input
            type="text"
            placeholder="Enter your firstname"
            value={this.firstname}
            onChange={this.handleFirstNameChange} />
          <br /><br />
          <label>LastName</label>
          <input
            type="text"
            placeholder="Enter your lastname"
            value={this.lastname}
            onChange={this.handleLastNameChange} />
          <br /><br />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={this.email}
            onChange={this.handleEmailChange} />
          <br /><br />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={this.password}
            onChange={this.handlePasswordChange} />
          <br /><br />
          <label>Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat your password" />
          <br /><br />
          <input
            type="submit"
            value="Register" />
        </form>
      </div>
    )
  }
}

export default App;
