function Quotation({ children, personPicture, personName, personTitle, companyLogo }) {
    return (
        <div className="my-5">
            <svg height={64} aria-hidden="true" style={{color: "A7F175"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 48" fill="currentColor"><path d="M28.0817 0.0882645C24.7395 2.93416 21.9567 6.13306 19.7332 9.68497C17.5095 13.1356 16.2004 16.9382 15.8059 21.0929C19.8669 21.1829 22.9666 22.3899 25.105 24.714C27.2434 27.0381 28.3172 29.821 28.3263 33.0628C28.3393 37.7229 27.0299 41.4242 24.3981 44.1668C21.766 46.8081 18.3687 48.0839 14.2061 47.9942C9.63812 48.1082 6.13135 46.5477 3.68584 43.3127C1.24005 39.9765 0.0114838 36.2822 0.000144112 32.23C-0.0151645 26.7595 1.18916 21.7921 3.61312 17.3279C6.0368 12.7623 9.37641 9.00469 13.632 6.05495C17.8872 3.0039 22.7038 1.01501 28.0817 0.0882645ZM59.7554 0C56.4132 2.84589 53.6304 6.04479 51.4069 9.59671C49.1831 13.0473 47.874 16.85 47.4796 21.0046C51.5406 21.0946 54.6403 22.3016 56.7787 24.6257C58.9171 26.9498 59.9908 29.7328 59.9999 32.9745C60.013 37.6346 58.7036 41.3359 56.0717 44.0785C53.4396 46.7198 50.0423 47.9956 45.8798 47.9059C41.3118 48.02 37.805 46.4595 35.3595 43.2245C32.9137 39.8882 31.6851 36.1939 31.6738 32.1417C31.6585 26.6712 32.8628 21.7038 35.2868 17.2396C37.7105 12.6741 41.0501 8.91643 45.3056 5.96668C49.5609 2.91564 54.3774 0.926744 59.7554 0Z"></path></svg>
            <h1 className="my-3">
                {children}
            </h1>
            <div className="container-fluid d-inline-flex justify-content-between my-4 p-0">
                <div className="d-inline-flex align-items-center">
                    <img
                        className=" me-2 rounded-circle"
                        src={personPicture ? personPicture : "https://placehold.co/48x48"}
                        width={48}
                    />
                    <div>
                        <p className="m-0">{ personName }</p>
                        <p className="m-0 fw-light text-white-50">{ personTitle }</p>
                    </div>
                </div>

                <img src={ companyLogo ? companyLogo : "https://placehold.co/80x40" } />
            </div>
        </div>

    )
}

export default Quotation