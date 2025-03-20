import { motion } from "framer-motion";
import profileImage from "../assets/Profile/profile.jpg";
import { ArrowRight, Sparkles, Github } from "lucide-react";

const Header = () => {
    return (
        <header id="principal" className="min-h-screen flex items-center bg-background relative overflow-hidden pt-16 md:pt-0">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-20 left-0 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 right-0 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative py-12 md:-py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div className="flex flex-col gap-4 md:gap-6 order-2 md:order-1">
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="hidden md:inline-flex items-center gap-2 bg-red-500/10 dark:bg-red-500/20 px-4 py-2 rounded-full w-fit"
                        >
                            <Sparkles className="w-4 h-4 text-red-500" />
                            <span className="text-sm font-medium text-red-500">Disponível para projetos</span>
                        </motion.div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 dark:from-red-500 dark:via-red-400 dark:to-red-500 text-transparent bg-clip-text"
                            >
                                Alberto
                            </motion.span>{" "}
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 dark:from-yellow-500 dark:via-yellow-400 dark:to-amber-500 text-transparent bg-clip-text"
                            >
                                José
                            </motion.span>
                        </h1>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground/80"
                        >
                            Dev Front-End
                        </motion.h2>

                        <motion.div className="space-y-3 md:space-y-4">
                            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                                Experiente em <span className="text-red-500 dark:text-red-400 font-semibold">React.js</span> e{" "}
                                <span className="text-yellow-500 dark:text-yellow-400 font-semibold">Tailwind CSS</span>, 
                                dedicado a desenvolver interfaces de usuário que sejam intuitivas e de alta performance.
                            </p>

                            <p className="text-lg text-muted-foreground max-w-2xl">
                                Valorizo a simplicidade e a clareza no design, sempre com foco na experiência do usuário.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex items-center gap-4 pt-6"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                className="bg-gradient-to-r from-red-600 to-yellow-600 dark:from-red-500 dark:to-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium shadow-lg hover:shadow-red-500/20 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>Vamos Conversar!</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/devangolano" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-4 rounded-xl border border-border hover:bg-background/50 transition-colors flex items-center justify-center text-muted-foreground hover:text-foreground"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square w-full max-w-[200px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[420px] mx-auto order-1 md:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-yellow-500/10 rounded-full blur-2xl" />
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img 
                                src={profileImage} 
                                alt="Alberto José" 
                                className="relative w-full h-full object-cover rounded-full border-6 sm:border-8 border-background shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}

export default Header;