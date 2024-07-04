import logolibrary from '/logo-library.jpg'

export default function Logo() {
    return(
        <>
            <img src={logolibrary} alt="Logo" className="h-10 w-10 mr-2" />
        </>
    )
}