import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <main>
        <div className="card login-card">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
            <div className="links">
              <a href="#forgot-password" className="link">Forgot your password?</a>
              <a href="#create-account" className="link">Create an account</a>
            </div>
          </form>
          <div className="social-login">

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
