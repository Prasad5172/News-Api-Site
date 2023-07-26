import React, { useEffect, useState } from 'react';
let pointer =null;
const Navbar = (props) => {
    const [value, setValue] = useState('');
    const [state,setState] = useState("home");
    
    useEffect(() => {
        function func(){
            
            const navItem = document.getElementById(state)
            if(pointer != null){
                console.log("hi")
                pointer.classList.remove('active')
            }

            pointer=navItem;
            
            pointer.classList.add('active')
        }
        func();
    },[state])

    return (
        <>
            <div className='nav-bar flex '>
                <div className='nav-img'>
                    <img src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg" alt="Eagle" />
                </div>
                <div className='list'>
                    <ul className='flex list-items' style={{ listStyle: 'none' }}>
                        <li onClick={() => {
                            props.setState('games');
                            setState("india") }} className='home' id='home'>Home</li>
                        <li onClick={() => {
                            props.setState('ipl');
                            setState("ipl") }} className='ipl' id='ipl'>IPL</li>
                        <li onClick={() => { 
                            props.setState('finance');
                            setState("finance") }} className='finance' id='finance'>Finance</li>
                        <li onClick={() => { 
                            props.setState('politics');
                            setState("politics") }} className='politics' id='politics'>Politics</li>
                    </ul>
                </div>
                <div className='search-bar flex'>
                    <input
                        type="text"
                        className='search-box'
                        placeholder='Type Here'
                        id='search-box'
                        autoComplete='off'
                        onChange={(e) => { setValue(e.target.value) }}
                    />
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => { props.setState(value) }}
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
