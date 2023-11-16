import { Link } from 'react-router-dom'

export default function HeroSection () {
    return (
        <div className="container-fluid position-relative p-0">        
            <div className=" container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">404 PAGE NOT FOUND</h1>
                            <p className="fs-4 text-white mb-4 animated slideInDown">Seems like the page you are trying to reach does not exist.</p>
                            <Link className="btn btn-primary py-3 px-5 mt-2" to="/">HOME</Link>
                            <div className="position-relative w-75 mx-auto animated slideInDown">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}