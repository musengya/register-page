import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>FirstName</label>
          <input type="text" placeholder="Ënter your firstname" />
          <label>LastName</label>
          <input type="text" placeholder="Ënter your lastname" />
          <label>Email</label>
          <input type="email" placeholder="Ënter your Email" />
          <label>Password</label>
          <input type="password" placeholder="Ënter your password" />
          <label>Repeat Password</label>
          <input type="password" placeholder="Repeat your password" />
        </form>
      </div>
    )
  }
}

export default App;
