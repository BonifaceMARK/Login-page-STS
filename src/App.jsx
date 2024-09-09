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
            <p>Or sign in with:</p>
            <div className="social-icons">
              <a href="#facebook" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#gmail" className="social-icon"><i className="fab fa-google"></i></a>
              <a href="#twitter" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#github" className="social-icon"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
