import { Link } from "react-router-dom"

import "./CardTemplate.css"

export default function CardTemplate({
    track
}) {

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
                <div className="overflow-hidden">
                    <img className="imageSize img-fluid" src={track.img} alt="" />
                </div>
                <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2"><i className="fa-solid fa-road text-primary me-2"></i>{track.trackLength} KM</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa-regular fa-clock text-primary me-2"></i>{track.duration} Hours</small>
                    <small className="flex-fill text-center py-2"><i className="fa-solid fa-person-walking-arrow-right text-primary me-2"></i>{track.difficulty}</small>
                </div>
                <div className="text-center p-4">
                    <h3 className="mb-0">{track.name}</h3>
                    <div className="d-flex justify-content-center mb-2">
                        <Link to={`/track/details/${track._id}`} className="detailsButton btn btn-sm btn-primary px-3 border-end">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};