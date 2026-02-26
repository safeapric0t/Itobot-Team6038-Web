import { motion } from "framer-motion";
import { type GalleryItem } from "../../features/gallery/galleryData";
import { useState } from "react";

interface GalleryCardProps {
    item: GalleryItem;
    onFullscreen: (item: GalleryItem) => void;
}

export const GalleryCard = ({ item, onFullscreen }: GalleryCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            className="group relative cursor-pointer overflow-hidden rounded-sm"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => onFullscreen(item)}
        >
            {/* Corner Brackets (HUD Style) */}
            <motion.div
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    x: isHovered ? 0 : -10,
                    y: isHovered ? 0 : -10
                }}
                className="absolute top-4 left-4 z-20 h-4 w-4 border-l-2 border-t-2 border-cyan-500 pointer-events-none"
            />
            <motion.div
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    x: isHovered ? 0 : 10,
                    y: isHovered ? 0 : -10
                }}
                className="absolute top-4 right-4 z-20 h-4 w-4 border-r-2 border-t-2 border-cyan-500 pointer-events-none"
            />
            <motion.div
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    x: isHovered ? 0 : -10,
                    y: isHovered ? 0 : 10
                }}
                className="absolute bottom-4 left-4 z-20 h-4 w-4 border-l-2 border-b-2 border-cyan-500 pointer-events-none"
            />
            <motion.div
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    x: isHovered ? 0 : 10,
                    y: isHovered ? 0 : 10
                }}
                className="absolute bottom-4 right-4 z-20 h-4 w-4 border-r-2 border-b-2 border-cyan-500 pointer-events-none"
            />

            {/* Main Image with Glitch/Scanline Overlay */}
            <div className="relative overflow-hidden">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-auto w-full transition-all duration-700 group-hover:scale-105"
                />

                {/* Scanline Effect */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-0 transition-opacity duration-300 group-hover:opacity-40" />

                {/* Color Overlay Tint */}
                <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Digital Info Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 z-20 bg-slate-950/90 p-4 border-t border-cyan-500/30 backdrop-blur-md transform translate-y-full transition-transform duration-500 group-hover:translate-y-0"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-400">
                                {item.category}
                            </span>
                        </div>
                        <h3 className="mt-1 text-lg font-bold text-white uppercase tracking-tight">{item.title}</h3>
                    </div>

                    <button className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
            </motion.div>

            {/* ID Badge (Top Left Floating) */}
            <div className="absolute top-4 left-4 z-30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                <span className="bg-cyan-500 px-2 py-0.5 text-[8px] font-mono font-black text-black uppercase">
                    IDX-{item.id.padStart(3, '0')}
                </span>
            </div>
        </motion.div>
    );
};
