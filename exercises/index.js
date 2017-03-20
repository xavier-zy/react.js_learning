const {
    render
} = ReactDOM

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}


render( 
    <h1 id = 'title'
        className = 'header'
        style = {style}>
    HEllo worlD 
    </h1>,
    document.getElementById('react-container')
)
