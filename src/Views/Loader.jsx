import '../styles/Loader.scss';
function Loader ({loader}){
    return(
        <div className={`loader ${loader ? "display" : null}`}></div>
    )
}

export default Loader;