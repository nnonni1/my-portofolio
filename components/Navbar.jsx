
import Link from 'next/link';
import Styles from "./../styles/Navbar.module.css"

const Navbar = () => {
  return (

    <nav className={Styles.nav}>

<div className={Styles.container + " container"}>

  <div className={Styles.logo}> AFNAN AHMED </div>

<ul>
  <li>
    <Link href="/"><a>Home</a></Link>
  </li>

  <li>
    <Link href="/ContactMe"><a>Contact Me</a></Link>
  </li>
  
</ul>
</div>



    </nav>
  )
}

export default Navbar 