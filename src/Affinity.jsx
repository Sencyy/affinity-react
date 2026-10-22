import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import LogoBand from "./components/LogoBand"
import Hero from "./components/Hero"
import CarouselSpy from "./components/CarouselSpy"
import Quotation from "./components/Quotation"

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
                    <div id="firstCarousel" data-bs-spy="scroll" data-bs-target="#firstCarouselSpy" className="my-5 carousel slide">
                        <div className="carousel-inner">
                            <div id="firstCarousel-slide-0" className="carousel-item active">
                            <img src='slides-1/vetor.png' className="d-block w-100" alt="..." />
                            </div>
                            <div id="firstCarousel-slide-1" className="carousel-item">
                            <img src='slides-1/pixel.png'  className="d-block w-100" alt="..." />
                            </div>
                            <div id="firstCarousel-slide-2" className="carousel-item">
                            <img src='slides-1/layout.png' className="d-block w-100" alt="..." />
                            </div>
                            <div id="firstCarousel-slide-3" className="carousel-item">
                            <img src='slides-1/canvaia.png' className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <CarouselSpy id="firstCarouselSpy" target={"#firstCarousel"} pages={["Vetor", "Pixel", "Layout", "Canva IA"]} />
                    </div>
                    <Quotation
                        personName="Veronica Fuerte"
                        personTitle="Fundadora e diretora criativa da Hey"
                        companyLogo="https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/2571649b-49cd-4320-ab85-c88cf91ac6a3/hey_white.svg"  
                        personPicture="https://content-management-files.affinity.studio/6e02c237-73fe-476a-8361-740dbf533124/heystudio.png"  
                    >
                        O Affinity deixa a gente se concentrar no trabalho. Ter edição de fotos, vetores e layout em um único app significa menos trocas, menos interrupções e mais tempo dedicado a projetar e criar os detalhes que fazem a diferença.
                    </Quotation>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Affinity