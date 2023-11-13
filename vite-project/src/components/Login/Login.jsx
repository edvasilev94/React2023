import "./login.css"


export default function Login () {
    return(
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="booking p-5 loginBooking">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6 reg">
                        <h1 className="text-white mb-4">Login</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6 reg">
                                    <div className="form-floating regf">
                                        <input type="email" className="form-control bg-transparent" id="email" placeholder="Email" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6 reg">
                                    <div className="form-floating regf date" id="date3" data-target-input="nearest">
                                        <input type="password" className="form-control bg-transparent datetimepicker-input" id="password" placeholder="password" data-target="password" data-toggle="password" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="col-12 regButton">
                                    <button className="btn btn-outline-light w-100 py-3" type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}