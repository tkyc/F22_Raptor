import React, { useState } from 'react';
import { Link } from '@material-ui/core';

const NavLink = ({onClick, text, style}) => {

    const [isPointer, setPointer] = useState(false);

    return (
        <Link onClick={onClick} style={{...style, cursor: isPointer? "pointer" : "default"}} onMouseOver={_ => setPointer(true)}>
            {text}
        </Link>
    );
};

export default NavLink;