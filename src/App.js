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

    })
  }
  handleLastNameChange(e) {
    this.setState({

    })
  }
  handlePasswordChange(e) {
    this.setState({

    })
  }
  handleEmailChange(e) {
    this.setState({

    })
  }
  render() {
    return (
      <div className="App">
        <h2>Register Page</h2>
        <form>
          <label>FirstName</label>
          <input type="text" placeholder="Enter your firstname" />
          <br /><br />
          <label>LastName</label>
          <input type="text" placeholder="Enter your lastname" />
          <br /><br />
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" />
          <br /><br />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <br /><br />
          <label>Repeat Password</label>
          <input type="password" placeholder="Repeat your password" />
          <br /><br />
          <input type="submit" value="Register" />
        </form>
      </div>
    )
  }
}

export default App;
