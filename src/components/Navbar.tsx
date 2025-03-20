import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Eye } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Add body scroll lock when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return ( 
        <>
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-4 md:top-8 w-full z-[100] px-2 md:px-4"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="bg-background/40 backdrop-blur-md rounded-xl md:rounded-2xl border border-border/40 dark:border-border/75 shadow-xl">
                        <div className="flex items-center justify-between h-[3.5rem] md:h-[4.5rem] px-4 md:px-8">
                            <motion.div 
                                onClick={() => scrollToSection('principal')}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="flex items-center gap-2"
                            >
                                <span className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity cursor-pointer">
                                    <span className="text-foreground/80">&lt;</span>
                                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 dark:from-red-500 dark:via-red-400 dark:to-red-500 text-transparent bg-clip-text font-extrabold">Dev</span>
                                    <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 dark:from-yellow-500 dark:via-yellow-400 dark:to-amber-500 text-transparent bg-clip-text ml-1 font-extrabold">Angolano</span>
                                    <span className="text-foreground/80"> /&gt; </span>
                                </span>
                            </motion.div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center gap-6">
                                <NavButton onClick={() => scrollToSection('principal')} label="Principal" />
                                <NavButton onClick={() => scrollToSection('sobre')} label="Sobre" />
                                <NavButton onClick={() => scrollToSection('skills')} label="Skills" />
                                <NavButton onClick={() => scrollToSection('projetos')} label="Projetos" />
                                <div className="ml-4 pl-4 border-l border-border dark:border-border/75">
                                    <ThemeToggle />
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="flex items-center gap-4 md:hidden">
                                <ThemeToggle />
                                <button 
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-foreground/80 hover:text-foreground transition-colors"
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 top-0 md:hidden bg-background/95 backdrop-blur-md z-[90]"
                    >
                        <div className="flex flex-col items-stretch pt-20">
                            <div className="flex flex-col items-stretch">
                                <MobileNavButton onClick={() => scrollToSection('principal')} label="Principal" />
                                <MobileNavButton onClick={() => scrollToSection('sobre')} label="Sobre" />
                                <MobileNavButton onClick={() => scrollToSection('skills')} label="Skills" />
                                <MobileNavButton onClick={() => scrollToSection('projetos')} label="Projetos" />
                            </div>
                            <div className="mt-auto border-t border-border/40 dark:border-border/75 p-8">
                                <motion.a 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    href="https://github.com/devangolano"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <img 
                                        src="/githublogo.png" 
                                        alt="GitHub" 
                                        className="w-6 h-6 invert dark:brightness-100 dark:invert-0" 
                                    />
                                    <span className="text-base font-medium">devangolano</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

const NavButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
    <motion.button 
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        onClick={onClick}
        className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all group"
    >
        {label}
        <span className="absolute inset-x-0 -bottom-px h-[2px] bg-gradient-to-r from-red-500/0 via-yellow-500 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </motion.button>
);

const MobileNavButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
    <motion.button
        whileHover={{ backgroundColor: "rgba(var(--foreground), 0.05)" }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="w-full px-8 py-6 text-lg font-medium text-muted-foreground hover:text-foreground transition-all text-left flex items-center justify-between"
    >
        {label}
        <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-foreground/40"
        >
            <Eye size={20} />
        </motion.span>
    </motion.button>
);

export default Navbar;