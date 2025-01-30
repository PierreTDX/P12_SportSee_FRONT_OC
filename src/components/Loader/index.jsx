import './loader.scss'
import IconLoader from '../../assets/img/loader.gif'

function Loader() {

    return (
        <>
            <div className='loader'>
                <img src={IconLoader} alt="icon loader" style={{ width: "50px" }} />
                <p>Chargement</p>
            </div>
        </>
    )
}

export default Loader