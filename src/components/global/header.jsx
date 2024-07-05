import style from '@/styles/global/header.module.scss'
import Image from 'next/image'
const Header = () => {
    return (
        <>
            <div className={style.headerContainer}>
                <div className={style.logoContainer}>
                    <img src="/assets/img/temp.png" alt='temp' />
                    <img src="/assets/img/logo.png" alt='Logo'  />
                </div>
                <div className={style.menuItems}>
                    <ul className={style.menuList}>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Event</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={style.searchContainer}>
                    <input 
                    className={style.searchInput} 
                    type="search" 
                    placeholder="Search"
                    />
                </div>
            </div>
        </>
    )
}

export default Header