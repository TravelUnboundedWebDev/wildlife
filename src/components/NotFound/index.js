import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  const onClickBackToHome = () => {
    window.history.back('/')
  }

  return (
    <div className="not-found-container">
      <img
        src="/home/not-found.png"
        alt="not found"
        className="not-found-bg-image mb-3"
      />
      <h1 className="input-text mb-3">Page Not Found</h1>
      <p className="
      input-text mb-3">
        we are sorry, the page you requested could not be found, please go back
        to the homepage
      </p>
      <Link to="/">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickBackToHome}
        >
          Go Back to Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound;
