const HeaderStyle = {
    backgroundColor: "blueviolet",
    fontSize: "18px",
    textAlign: "center"
}

function Header() {
    return(
        <div style={HeaderStyle}>
            <h1>Michael Gillett's portfolio</h1>
            <p>Created in Next.js</p>
        </div>
    );
}

export default Header;