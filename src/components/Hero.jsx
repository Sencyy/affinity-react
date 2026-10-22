import '../style/Hero.css'

function Hero({ children, type }) {
    if (type == "centered") {
        return (
            <div className="HeroBox px-4 py-5 my-5 text-center col-8 offset-2">
                {children}
            </div>
        )
    }

    return (
        <div className="HeroBox px-4 py-5 my-5 text-center">
            {children}
        </div>
    )

}

export default Hero