import { motion } from "framer-motion";
import profileImage from "../assets/Profile/profile.jpg";
import { ArrowRight, Sparkles, Github } from "lucide-react";

const Header = () => {
    return (
        <header id="principal" className="min-h-screen flex items-center bg-background relative overflow-hidden pt-20 md:pt-28">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                    <motion.div 
                        className="flex flex-col gap-6 md:gap-8 order-2 md:order-1 text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="hidden md:inline-flex items-center gap-2 bg-red-500/10 dark:bg-red-500/20 px-5 py-2.5 rounded-full w-fit mx-auto md:mx-0"
                        >
                            <Sparkles className="w-4 h-4 text-red-500" />
                            <span className="text-sm font-medium text-red-500">Disponível para projetos</span>
                        </motion.div>
                        
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400 text-transparent bg-clip-text">
                                    Alberto
                                </span>{" "}
                                <span className="bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-500 dark:to-amber-500 text-transparent bg-clip-text">
                                    José
                                </span>
                            </h1>
                            
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground/80">
                                Desenvolvedor Front-End
                            </h2>
                        </div>

                        <div className="space-y-4 text-base sm:text-lg">
                            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                                Especialista em <span className="text-red-500 dark:text-red-400 font-semibold">React.js</span> e{" "}
                                <span className="text-yellow-500 dark:text-yellow-400 font-semibold">Tailwind CSS</span>, 
                                focado em criar interfaces modernas e de alta performance.
                            </p>

                            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                                Comprometido com a excelência em design e experiência do usuário.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 pt-8 justify-center md:justify-start">
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                className="bg-gradient-to-r from-red-600 to-yellow-600 dark:from-red-500 dark:to-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium shadow-xl hover:shadow-red-500/20 transition-all flex items-center justify-center gap-3"
                            >
                                <span className="text-base sm:text-lg">Vamos Conversar</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/devangolano" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 sm:p-4 rounded-2xl border-2 border-border hover:bg-accent transition-colors flex items-center justify-center text-muted-foreground hover:text-foreground"
                            >
                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative aspect-square w-full max-w-[200px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px] mx-auto order-1 md:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-yellow-500/30 rounded-full blur-[100px]" />
                        <motion.div
                            animate={{ 
                                y: [0, -12, 0],
                                rotate: [0, 2, 0, -2, 0]
                            }}
                            transition={{ 
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <img 
                                src={profileImage} 
                                alt="Alberto José" 
                                className="w-full h-full object-cover rounded-full border-6 sm:border-8 border-background shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}

export default Header;