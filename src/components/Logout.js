import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Auth from './context/Auth'

const Logout = () => {
    const { setIsAuth, setUser } = useContext(Auth)
    const linkClicked = () => {
        localStorage.removeItem("userName")
        setIsAuth(false)
        setUser('')
    }

    return (
        <>
        You have reached to the end.{ <Link to='/login' onClick={linkClicked}>Click here </Link>} to logout and go to login page.
        </>
    )
}

export default Logout