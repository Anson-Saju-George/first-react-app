
const Header = ({destructuredProp}) => {
    const headerStyle = {
            backgroundColor: 'royalblue',
            color: '#fff'
        };
    return (
        <header style={headerStyle}
                /* style={{
            backgroundColor: 'mediumblue',
            color: '#fff'
        }} */>
            <h1>List of Contents</h1>
        </header>
    )
}


export default Header
