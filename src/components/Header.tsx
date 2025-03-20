const Header = () => {
    return (
        <header id="principal" className="min-h-screen flex items-center justify-center bg-background pt-20">
            <div className="  px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl text-muted-foreground">
                        Olá! Me Chamo:
                    </h2>
                    
                    <h1 className="text-6xl font-bold">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                            Alberto José
                        </span>
                    </h1>
                    
                    <h2 className="text-5xl font-bold text-foreground">
                        Dev Front-End
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mt-4">
                        Experiente em <span className="text-primary">React.js</span> e <span className="text-primary">Tailwind CSS</span>, 
                        dedicado a desenvolver interfaces de usuário que sejam intuitivas e de alta performance.
                    </p>

                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Valorizo a simplicidade e a clareza no design, sempre com foco na experiência do usuário.
                    </p>

                    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg w-fit mt-6 hover:opacity-90 transition-opacity">
                        Vamos Conversar!
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;