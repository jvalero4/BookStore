import Logo from './Logo'
import Menu from './Menu'

export default function Header() {
    return(
        <>
        <header className="bg-orange-300 py-4">
            <div className='container mx-auto flex justify-between items-center'>
            <Logo/>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Menu/>
            </div>
        </header>
        </>
    )
}