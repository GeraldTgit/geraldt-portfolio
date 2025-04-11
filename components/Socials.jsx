import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/GeraldTgit"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/gerald-dave-trajano-696b2816b/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/jegerald/"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((social, index) => {
        return <Link key={index} href={social.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
        
          {social.icon}
      
      </Link>
    })}

  </div>
}

export default Socials