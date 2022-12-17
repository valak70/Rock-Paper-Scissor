import logo from '../../public/images/logo.svg';
export default function Nav(){
    return(
        <div className="nav-container">
            <div className="navbar">
                <img className='logo' src={logo} alt="" />
                <div className='score-container'>
                    <p className='score'>SCORE</p>
                    <p className='points'>10</p>
                </div>
            </div>
        </div>
    )
}