import "./register.css"


export default function Register () {
    return(
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="registerBooking booking p-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6 reg animated slideInDown">
                        <h1 className="text-white mb-4">Register</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6 reg">
                                    <div className="form-floating regf">
                                        <input type="text" className="form-control bg-transparent" id="Username" placeholder="Username" />
                                        <label htmlFor="Username">Username</label>
                                    </div>
                                </div>
                                <div className="col-md-6 reg">
                                    <div className="form-floating regf">
                                        <input type="email" className="form-control bg-transparent" id="email" placeholder="Email" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6 reg">
                                    <div className="form-floating regf date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="password" placeholder="password" data-target="password" data-toggle="password" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="col-md-6 reg">
                                    <div className="form-floating regf date" id="date3" data-target-input="nearest">
                                        <input type="text" className="form-control bg-transparent datetimepicker-input" id="confirmPassword" placeholder="confirmPassword" data-target="confirmPassword" data-toggle="confirmPassword" />
                                        <label htmlFor="confirmPassword">Confirm your Password</label>
                                    </div>
                                </div>
                                <div className="col-12 regButton">
                                    <button className="btn btn-outline-light w-100 py-3" type="submit">Register</button>
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