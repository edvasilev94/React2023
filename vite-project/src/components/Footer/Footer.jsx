import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link to="/" className="border-bottom" >Best Mountain Tracks</Link>, All Right Reserved.

                            
                            Designed By <a className="border-bottom" href="https://github.com/edvasilev94">Encho Vasilev</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}