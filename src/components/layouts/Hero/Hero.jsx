const Hero = () => {
    return (
        <>
            <div className="flex bg-bg-animemine justify-evenly items-center m-auto h-[80vh] font-poppins">
                <div className="hero-text max-w-[40%] text-white">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center md:text-left">Selamat Datang di <span className="text-animemine">Animemine</span></h3>
                    <p className="text-xs md:text-sm mt-3 mb-6 text-center md:text-left">Tempatnya streaming anime gratis subtitle Indonesia! Nikmati serunya menonton anime favoritmu kapan saja, di mana saja. Dengan koleksi terbaru dan klasik, Animemine siap menyajikan hiburan tanpa henti. 🐾🎉</p>
                </div>
                <img src="cute-mine.png" alt="cute animemine" className="w-[200px] hidden md:block" />
            </div>
        </>
    )
}

export default Hero;