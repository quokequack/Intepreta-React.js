import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/footer.css";

export default function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <div class="icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span> Street name and number</span> City, Country
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> (+00) 0000 000 000</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="#"> office@company.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <h2>
            {" "}
            Company<span> logo</span>
          </h2>
          <p class="menu">
            <a href="#"> Home</a> |<a href="#"> About</a> |
            <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
            <a href="#"> News</a> |<a href="#"> Contact</a>
          </p>
          <p class="name"> Company Name &copy; 2016</p>
        </div>
      </footer>
    </>
  );
}
