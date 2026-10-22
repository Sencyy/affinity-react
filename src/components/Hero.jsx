import '../style/Hero.css'

function Hero({ children }) {
    return (
        <div className="HeroBox px-4 py-5 my-5 text-center">
            {children}
        </div>

    )
}

export default Hero