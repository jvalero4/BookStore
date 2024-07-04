

export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © 2024 My book store. All rights reserved.
                </p>
                <nav className="flex justify-center mt-2">
                    <a href="#" className="text-blue-400 mx-2 hover:underline">Instagram</a>
                    <a href="#" className="text-blue-400 mx-2 hover:underline">LinkedIn</a>
                    <a href="#" className="text-blue-400 mx-2 hover:underline">Twitter</a>
                </nav>
            </div>  
        </footer>
    )
}