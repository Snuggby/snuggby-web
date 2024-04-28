import style from '@/styles/global/header.module.scss'
import { SearchOutlined } from '@mui/icons-material';
import Image from 'next/image';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <Image src="/assets/img/logo.jpg" alt="logo" width={100} height={80} />
            </div>
            <div className={style.menu}>
                <ul>
                    <li>About </li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <div className={style.search}>
                <input type="text" placeholder="Search" name="search" />
                <SearchOutlined />
            </div>
        </div>
    )
}


export default Header;

