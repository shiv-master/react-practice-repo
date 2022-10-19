import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Auth from "./context/Auth"

const Home = () => {
    const { user } = useContext(Auth)
    const counter = useSelector(state => state.counter.counter)
    const cloth = useSelector(state => state.counter.cloth)
    const show = useSelector(state => state.show.show)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [searchVal, setSearchVal] = useState('')
    const [searchData, setSearchData] = useState([])
    
    useEffect(() => {
        // Setting dummy data for the table
        const dummyData = [
            { item: "tie", count: 8 },
            { item: "jeans", count: 6 },
            { item: "shoes", count: 9 },
            { item: "pants", count: 15 },
            { item: "shirt", count: 18 },
            { item: "trousers", count: 4 },
            { item: "belt", count: 23 }
        ]
        setData(dummyData)
        setSearchData(dummyData)
    }, [])

    const searchChanged = (e) => {
        setSearchVal(e.target.value)
        if(e.target.value.length === 0) {
            setSearchData(data)
        } else {
            const filteredData = data.filter(entity => entity.item.startsWith(e.target.value))
            setSearchData(filteredData)
        }
    }

    return (
        <>
            <h4>Welcome {user} to the world of practice.</h4>
            <input type='text' placeholder='Search' value={searchVal} onChange={searchChanged}></input>
            <div className="center">
            { searchData.length > 0 &&
                <table className="topBtmSpace">
                <thead>
                    <tr>
                        <th className="yellowBorder">ITEM</th>
                        <th className="yellowBorder">COUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchData?.map((entity, index) => {
                            return (
                            <tr key={index}>
                                <td className="yellowBorder">{entity.item}</td>
                                <td className="yellowBorder">{entity.count}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            }
            </div>
            {
                show ?
                    <>
                        <div>{cloth[counter]}</div>
                        <button className="btn-space" type="button" onClick={() => dispatch({ type: 'DECREASE', payload: 1 })} disabled={counter === 0}>Previous</button>
                        <button className="btn-space" type="button" onClick={() => dispatch({ type: 'INCREASE', payload: 1 })} disabled={counter === 6}>Next</button>
                        <button className="btn-space" type="button" onClick={() => dispatch({ type: "HIDE" })}>Hide Counter</button>
                    </>
                    :
                    <button className="btn-space" type="button" onClick={() => dispatch({ type: "SHOW" })}>Show Counter</button>
            }
        </>
    )
}

export default Home