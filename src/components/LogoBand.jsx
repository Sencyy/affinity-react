import expedia from '../assets/logos/expedia_black.svg'
import jll from '../assets/logos/JLL.svg'
import mbj from '../assets/logos/mbj_black.svg'
import pentagram from '../assets/logos/pentagram_black.svg'
import publicschool from '../assets/logos/publicschool_black.svg'
import tmobile from '../assets/logos/tmobile_black.svg'
import twist from '../assets/logos/twist_black.svg'
import uniwash from '../assets/logos/uniwash_black.svg'
import WPP from '../assets/logos/WPP_black.svg'

function LogoBand() { 
    const logos = [
        expedia,
        jll,
        mbj,
        pentagram,
        publicschool,
        tmobile,
        twist,
        uniwash,
        WPP
    ]

    return (
        <div id="LogoBand">
            <div id="LogoBand-items">
                {[...logos, ...logos].map((logo, index) => (
                    <div className="Logoband-item" key={index}>
                        <img src={logo} height={24} />
                    </div>
                ))}
            </div>
        </div>  
    )
}

export default LogoBand