import pb from "lib/pocketbase"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import userLogout from "hooks/userLogout";

function Auth() {
  // hook service
  const { logout } = userLogout();
  
    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);
    const [pageReloadState, reloadPage] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const isUserSign = pb.authStore.isValid;
    const userAvatar = pb.authStore;

    async function login(data) {
        setLoading(true);
        try {
            await pb.collection("users")
                .authWithPassword(data.floatingInput, data.floatingPassword);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    function signOut() {
        logout();
        reloadPage(true);
    }

    // View Show User LOGIN
    if (isUserSign) {
        return (
            <>
                <header className="theme-2">
                    <div className="header__upper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="header__upper--left">
                                        <div className="d-none d-lg-block logo">
                                            <a href="index.html"><img src="assets/images/logo-main.webp" alt="Site Logo" /></a>
                                        </div>
                                        <div className="d-block d-lg-none logo w-49px">
                                            <a href="index.html"><img src="assets/images/logo-icon.webp" alt="Site Logo" /></a>
                                        </div>

                                        <button type="button" className="nav-toggle-btn a-nav-toggle ms-auto d-block d-lg-none">
                                            <span className="nav-toggle nav-toggle-sm">
                                                <span className="stick stick-1"></span>
                                                <span className="stick stick-2"></span>
                                                <span className="stick stick-3"></span>
                                            </span>
                                        </button>

                                    </div>
                                </div>
                                <div className="d-none d-lg-block col-lg-6">
                                    <div className="header__upper--right">
                                        <nav className="navigation">
                                            <ul>
                                                <li className="m-0">
                                                    <div className="dropdown">
                                                        <a href="#" className="dropdown-toggle" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h6 className="m-0">Passenger <i className="fas fa-angle-down"></i></h6>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdownMenuButton">
                                                            <a className="dropdown-item" href="on-ride.html">On Ride</a>
                                                            <a className="dropdown-item" href="passenger-profile.html">Passenger</a>
                                                            <a className="dropdown-item" href="ride-with-carrgo.html">Ride with Cargo</a>
                                                            <a className="dropdown-item" href="ride-with-carrgo-booked.html">Ride with Cargo Booked</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="m-0">
                                                    <div className="dropdown">
                                                        <a href="#" className="dropdown-toggle" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h6 className="m-0">Driver <i className="fas fa-angle-down"></i></h6>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdownMenuButton">
                                                            <a className="dropdown-item" href="partner-profile.html">Partner Profile</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="m-0">
                                                    <div className="dropdown">
                                                        <a href="#" className="dropdown-toggle" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <div className="media">
                                                                <div className="media-body">
                                                                    <h6 className="m-0">Login <i className="fas fa-angle-down"></i></h6>
                                                                    <p className="m-0">India</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdownMenuButton">
                                                            <a className="dropdown-item" href="sign-in.html">Sign In</a>
                                                            <a className="dropdown-item" href="sign-up.html">Sign up</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="m-0"><a href="contact-us.html">Help</a></li>
                                                <li className="m-0"><a href="contact-us.html"><i className="far fa-envelope"></i></a></li>
                                            </ul>
                                        </nav>
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <div className="media">
                                                    <img height="30" width="30" className="me-3" src={userAvatar}
                                                        alt="" />
                                                    <div className="media-body">
                                                        <h6 className="m-0">John Doe <i className="fas fa-angle-down"></i></h6>
                                                        <p className="m-0">India</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="partner-profile.html">Profile</a>
                                                <a className="dropdown-item" onClick={signOut}>Sign out</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="responsive-menu">
                    <div className="rep-header">
                        <div className="logo">
                            <a href="index.html"><img src="assets/images/logo-main.webp" alt="Site Logo" /></a>
                        </div>
                        <a href="#" title="" className="close-menu"><i className="lni lni-close"></i></a>
                    </div>
                    <div className="navbar-collapse" id="navbarSupportedContent">
                        <ul className="mobile-menu navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">
                                    <div className="media">
                                        <img height="30" width="30" className="me-3" src="assets/images/partner-img.webp" alt="" />
                                        <div className="media-body">
                                            <h6 className="m-0">John Doe <i className="fas fa-angle-down"></i></h6>
                                            <p className="m-0">India</p>
                                        </div>
                                    </div>
                                    <span className="sr-only">(current)</span>
                                </a>
                                <ul>
                                    <li><a className="dropdown-item" href="partner-profile.html">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <div className="media">
                                        <div className="media-body">
                                            <h3 className="m-0">Passenger</h3>
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li>
                                        <a className="dropdown-item" href="on-ride.html">On Ride</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="passenger-profile.html">Passenger</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="ride-with-carrgo.html">Ride with Cargo</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="ride-with-carrgo-booked.html">Ride with Cargo Booked</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <div className="media">
                                        <div className="media-body">
                                            <h3 className="m-0">Driver</h3>
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li>
                                        <a className="dropdown-item" href="partner-profile.html">Partner Profile</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <div className="media">
                                        <div className="media-body">
                                            <h3 className="m-0">Login</h3>
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li>
                                        <a className="dropdown-item" href="sign-in.html">Sign In</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="sign-up.html">Sign up</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="m-0"><a href="contact-us.html">Help</a></li>
                            <li className="m-0"><a href="contact-us.html"><i className="far fa-envelope"></i></a></li>
                        </ul>
                        <div className="header__upper--right flex-column">
                            <nav className="navigation p-3">
                                <ul>
                                    <li><a href="ride-with-carrgo.html">Ride</a></li>
                                    <li><a href="my-driver-dashboard.html">Driver Dashboard</a></li>
                                    <li><a href="contact-us.html">Help</a></li>

                                </ul>
                            </nav>
                            <a href="sign-up.html" className="button p-3"><i className="far fa-user-astronaut"></i> Drive with
                                us</a>
                            <a href="ride-with-carrgo.html" className="button p-3"><i className="far fa-taxi"></i> Book a
                                Ride</a>
                            <div className="p-3 my-lg-0 d-inline-flex">
                                <a href="sign-in.html" className="button button-light big">Get Started</a>
                            </div>
                        </div>

                    </div>





                </section>
                <div className="breadcrumb-div">
                    <div className="container">
                        <h1 className="page-title mb-0">Let's Ride</h1>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Ride with Carrgo</li>
                        </ol>
                    </div>
                </div>

                <div className="div-padding our-vehicles-div">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="booking-form">
                                    <form action="#">
                                        <div className="from-group destination">
                                            <label htmlFor="inputFrom">From</label>
                                            <i className="fas fa-map-marker-alt"></i>
                                            <input type="text" name="frominputDestination" placeholder="Select Pickup" id="inputFrom" className="form-control" />
                                        </div>
                                        <div className="from-group destination">
                                            <label htmlFor="inputDestination">Where to?</label>
                                            <i className="fas fa-map-marker-alt"></i>
                                            <input type="text" name="desctination" placeholder="Select Destination" id="inputDestination" className="form-control" />
                                        </div>
                                        <div className="payment-options-wrapper">
                                            <h2>Payment Method</h2>
                                            <div className="from-group payment-options">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="payment-opts" id="cash-pay" value="option1" />
                                                    <label className="form-check-label" htmlFor="cash-pay">Cash</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="payment-opts" id="banking-pay" value="option2" />
                                                    <label className="form-check-label" htmlFor="banking-pay">Net Banking</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="payment-opts" id="card-pay" value="option3" />
                                                    <label className="form-check-label" htmlFor="card-pay">Debit Card</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="select-car-wrapper">
                                            <h2>Selected Car</h2>
                                            <div className="selected-car">
                                                <div className="from-group car-options">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="car-opts" id="scooter" value="option1" />
                                                        <label className="form-check-label" htmlFor="scooter">
                                                            <img src="assets/images/dashboard/car-1.webp" alt="car" />
                                                        </label>
                                                        <div className="car-details">
                                                            <h4>1x</h4>
                                                            <p>Scooter</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="car-opts" id="alto" value="option2" />
                                                        <label className="form-check-label" htmlFor="alto">
                                                            <img src="assets/images/dashboard/car-2.webp" alt="Car" />
                                                        </label>
                                                        <div className="car-details">
                                                            <h4>2x</h4>
                                                            <p>Alto</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="car-opts" id="swift" value="option3" />
                                                        <label className="form-check-label" htmlFor="swift">
                                                            <img src="assets/images/dashboard/car-3.webp" alt="Car" />
                                                        </label>
                                                        <div className="car-details">
                                                            <h4>3x</h4>
                                                            <p>Swift dzire</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="car-opts" id="luxury" value="option3" />
                                                        <label className="form-check-label" htmlFor="luxury">
                                                            <img src="assets/images/dashboard/car-4.webp" alt="Car" />
                                                        </label>
                                                        <div className="car-details">
                                                            <h4>4x</h4>
                                                            <p>Luxury</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="car-opts" id="tourist" value="option3" />
                                                        <label className="form-check-label" htmlFor="tourist">
                                                            <img src="assets/images/dashboard/car-5.webp" alt="Car" />
                                                        </label>
                                                        <div className="car-details">
                                                            <h4>5x</h4>
                                                            <p>Tourist</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="button button-dark">Book Now</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ride-map-area">
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>)
    }

    // View Show User LogOut
    return (<>
        <header className="theme-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="logo">
                            <a href="index.html"><img src="assets/images/logo-main.webp" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="div-padding p-t-0 signin-div user-access-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <br></br><br></br><br></br>
                        <div className="account-access sign-in">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#rider" className="active" aria-controls="rider" role="tab" data-toggle="tab">Rider</a>
                                </li>
                                <li role="presentation">
                                    <a href="#driver" aria-controls="driver" role="tab" data-toggle="tab">Driver</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="rider">
                                    <form className="mb-4" onSubmit={handleSubmit(login)}>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("floatingInput")} />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  {...register("floatingPassword")} />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>

                                        <div className="checkbox mb-3">
                                            <label>
                                                <input type="checkbox" value="remember-me" /> Remember me
                                            </label>
                                        </div>
                                        <button className="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>

                                    </form>
                                    <p className="acclink">Don't have an account?
                                        <a href="sign-up.html">Sign up
                                            <i className="icofont">double_right</i>
                                        </a>
                                    </p>

                                    <div className="externel-signup">
                                        <a href="#" className="btn-block facebook">
                                            <i className="fab fa-facebook-f"></i>
                                            Sign up with Facebook</a>
                                        <a href="#" className="btn-block google">
                                            <i className="fab fa-google"></i>
                                            Sign up with Google</a>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="driver">
                                    <form className="mb-4">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                                            <label htmlFor="floatingInputEmail">Email address</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingPass" placeholder="Password" />
                                            <label htmlFor="floatingPass">Password</label>
                                        </div>

                                        <div className="checkbox mb-3">
                                            <label>
                                                <input type="checkbox" value="remember-me" /> Remember me
                                            </label>
                                        </div>
                                        <button className="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <footer className="theme-2">

            <div className="footer-nav-div div-padding theme-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-brand">
                                <a href="index.html"><img src="assets/images/logo.webp" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="social-nav">
                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="instagram"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#" className="google-p"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="app-download-box">
                                <a href="#"><img src="assets/images/icon/google-play.webp" alt="Google play" /></a>
                                <a href="#"><img src="assets/images/icon/apple-store.webp" alt="Apple store" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-div theme-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>&copy; Copyright 2022 by Tortoiz. All Right Reserved.</p>
                        </div>
                        <div className="col-lg-6">
                            <ul className="social-nav">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </>);
}
export default Auth;