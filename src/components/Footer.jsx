import React from "react";

const year = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>© {year} Ecuafields, Inc. All rights reserved</p>
    </footer>
}

export default Footer;