// hey hey hey befor you use this:
// The carousel children must have an id like [id_of_the_carousel]-slide-N
// where N is the page number starting from 0

import "../style/CarouselSpy.css"

import { useEffect } from "react"

function CarouselSpy({ target, pages }) {
    useEffect(() => {
        const carousel = document.querySelector(target)
        const buttons = document.querySelectorAll(`${target}-spy [data-bs-slide-to]`)
        carousel.addEventListener("slide.bs.carousel", (e) => {
            buttons.forEach((btn, index) => {
                if (index === e.to) {
                    btn.classList.remove("btn-dark-subtle")
                    btn.classList.add("btn-success")
                } else {
                    btn.classList.remove("btn-success")
                    btn.classList.add("btn-dark-subtle")
                    
                }
            })
        })
    })

    return (
        <div id={`${target.slice(1)}-spy`} className="container-fluid d-inline-flex justify-content-center position-absolute kinda-floaty">
            <div className="bg-dark-subtle p-2 border rounded-4">
                {
                    pages.map((title, index) => (
                        <button
                        key={`${target}-spybtn-${index}`}
                        className="btn btn-dark-subtle mx-2"
                        data-bs-target={`${target}`}
                        data-bs-slide-to={index}
                        >
                            {title}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default CarouselSpy