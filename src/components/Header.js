import './sass/Header.scss'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        //set dummy menu data
        const dummyData = [
            {
                title: "Menu",
                link: '/menu'
            },
            {
                title: "Profile",
                link: '/profile'
            },
            {
                title: "Logout",
                link: '/logout'
            }
        ]
        setMenu(dummyData)
    }, [])

    return (
        <nav className="navbar">
            {
                menu?.map((item, index) => <div key={index}><NavLink to={item.link}>{item.title}</NavLink></div>)
            }
        </nav>
    )
}

export default Header