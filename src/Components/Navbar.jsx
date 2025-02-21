import logo from "../assets/DZ.png"
import {FaGithub} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="mx-2 w-[50px] ml-7"/>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a target="_blank" href="https://github.com/donatio3"><FaGithub/></a>
            <a target="_blank" href="https://t.me/dmitriiZago"><FaTelegram/></a>
            <a target="_blank" href="https://www.instagram.com/myp_dima_zagoruiko"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar