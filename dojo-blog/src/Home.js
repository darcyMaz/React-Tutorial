const Home = () => {

    const handleClick = (e) => {
        console.log("Hello, World!", e);
    };

    const handleClick1 = (name, e) => {
        console.log('Hello ' + name, e.target);
    };

    return (
        <div className="home">
            <h2> Homepage </h2>
            <button onClick={handleClick}> Click me! </button>
            <button onClick={(e) => {
                handleClick1('insert name here.', e)
            }}> Using an anonymous function! </button>
        </div>
    )
}

export default Home;