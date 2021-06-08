import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
render(){

    return(
        <nav className="navbar navbar-dark bg-success navbar-expand-lg">
            <Link to="/" className="navbar-brand">ComAgent</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link className="nav-link dropdown-toggle"  href="#"id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Creation</Link>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <Link to="/PartyLedger" className="nav-link">Transcation</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Payment" className="nav-link">Ledger</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}
    
}

