import style from './NavBar.module.scss'
import {useState, useEffect} from "react";

const NavBar = () => {
  const [navTransparency, navTransparencyHandler] = useState(false);

  const transitionNavBar = () => {
    (window.scrollY > 20) ? navTransparencyHandler(true) : navTransparencyHandler(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  })

  return (
    <div className={style.navBar}>
      <div className={`${style.navBar__content} ${(navTransparency && style.navBar__black)}`}>
        <img className={`${style.navBar__element} ${style.navBar__logo}`} src="./images/fake-netflix.png" alt="" />
        <img className={`${style.navBar__element} ${style.navBar__avatar}`} src="./images/avatar.png" alt=""/>
      </div>
    </div>
  )
}

export default NavBar;