// hey hey hey befor you use this:
// The carousel children must have an id like [id_of_the_carousel]-slide-N
// where N is the page number starting from 0

import "../style/CarouselSpy.css"

function CarouselSpy({ target, pages }) {

    return (
        <div id={`${target.slice(1)}-spy`} className="">
            {
                pages.map((title, index) => (
                    <button
                    key={`${target}-spybtn-${index}`}
                    className="btn btn-dark"
                    data-bs-target={`${target}`}
                    data-bs-slide-to={index}
                    >
                        {title}
                    </button>
                ))
            }
        </div>
    )
}

export default CarouselSpy