import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Auth from './context/Auth'

const Error = () => {
    const { isAuth } = useContext(Auth)

    return (
        <h4>Page not found. <Link to={isAuth ? '/home' : '/login'}>Click here</Link> to go to {isAuth ? 'home' : 'login'} page.</h4>
    )
}

export default Error