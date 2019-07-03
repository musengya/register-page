import React from "react";
import "./App.css";

class App extends React.Component {
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;
