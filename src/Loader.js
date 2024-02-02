import './Loader.css';

function Loader() {
    return (
        <>
            <div className='main d-flex justify-content-center'>
                <div class="spinner-border text-center" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Loader;