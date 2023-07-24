import '../Styles/App.css';
import '../Styles/Nav.css';
function Header(){
    return(
        <div className="menu">
            <a href="#" className="link-item home">Home</a>
            <a href="#" className="link-item about"> About</a>
            <a href="#" className="link-item contact">Contact</a>
        </div>
    )


}
export default Header;