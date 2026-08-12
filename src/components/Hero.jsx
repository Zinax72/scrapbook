import hero from '../assets/heropic.jpg'

function Hero() {
    return (
        <>
        <main className="flex items-center justify-center gap-8 md:p-12 text-center">
            <div className="max-w-lg px-4">
                <p className="text-soft-white text-md md:text-base -mb-2">A corner of the internet, just for us</p>
                <h1 className="text-soft-white text-4xl md:text-6xl lg:text-7xl font-bold">Ray & Jai</h1>
                <p className="text-soft-white text-base md:text-xl mt-2">Our memories digitized</p>
            </div>
        </main>      
        </>
    )
}

export default Hero;