import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import LogoBand from "./components/LogoBand"
import Hero from "./components/Hero"
import CarouselSpy from "./components/CarouselSpy"

function Affinity() {
    return (
        <>
        <div id="main" data-bs-theme="dark">
            <Navbar />
            <Banner />
            <LogoBand />
            <div className="bg-dark-subtle1">
                <div className="col-8 offset-2">
                    <Hero type={"normal"}>
                        <h2>
                            Chega de ficar trocando de aplicativo
                        </h2>
                        <p>
                            Crie, edite, faça o layout e depois edite de novo... sem nunca sair do seu arquivo .af. O Affinity tem todas as ferramentas profissionais de design e edição de fotos que você precisa em um único app extremamente rápido e poderoso.
                        </p>
                    </Hero>
                    <div id="firstCarousel" data-bs-spy="scroll" data-bs-target="#firstCarouselSpy" className="carousel slide">
                        <div className="carousel-inner">
                            <div id="firstCarousel-slide-0" className="carousel-item active">
                            <img src='/slides-1/vetor.png' className="d-block w-100" alt="..." />
                            </div>
                            <div id="firstCarousel-slide-1" className="carousel-item">
                            <img src='/slides-1/pixel.png'  className="d-block w-100" alt="..." />
                            </div>
                            <div id="firstCarousel-slide-2" className="carousel-item">
                            <img src='/slides-1/layout.png' className="d-block w-100" alt="..." />
                            </div>
                            <div id="firstCarousel-slide-3" className="carousel-item">
                            <img src='/slides-1/canvaia.png' className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <CarouselSpy id="firstCarouselSpy" target={"#firstCarousel"} pages={["Vetor", "Pixel", "Layout", "Canva IA"]} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Affinity