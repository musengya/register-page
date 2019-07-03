import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>FirstName</label>
          <input type="text" placeholder="Ënter your firstname" />
          <br />
          <label>LastName</label>
          <input type="text" placeholder="Ënter your lastname" />
          <br />
          <label>Email</label>
          <input type="email" placeholder="Ënter your Email" />
          <br />
          <label>Password</label>
          <input type="password" placeholder="Ënter your password" />
          <br />
          <label>Repeat Password</label>
          <input type="password" placeholder="Repeat your password" />
          <br />
        </form>
      </div>
    )
  }
}

export default App;
