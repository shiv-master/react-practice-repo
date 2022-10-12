import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import Auth from "./context/Auth"
import Header from "./Header"

const Home = () => {
    const { user } = useContext(Auth)
    const counter = useSelector(state => state.counter)
    const cloth = useSelector(state => state.cloth)
    const dispatch = useDispatch()

    return (
        <>
        <Header/>
        <h4>Welcome { user } to the world of practice.</h4>
        <div>{cloth[counter]}</div>
        <button className="btn-space" type="button" onClick={() => dispatch({ type: 'DECREASE', payload: 1 })} disabled={counter === 0}>Previous</button>
        <button className="btn-space" type="button" onClick={() => dispatch({ type: 'INCREASE', payload: 1 })} disabled={counter === 6}>Next</button>
        </>
    )
}

export default Home