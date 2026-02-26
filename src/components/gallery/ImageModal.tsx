import { motion, AnimatePresence } from "framer-motion";
import { type GalleryItem } from "../../features/gallery/galleryData";
import { useEffect } from "react";

interface ImageModalProps {
    item: GalleryItem | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ImageModal = ({ item, isOpen, onClose }: ImageModalProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && item && (
                <motion.div
                    className="fixed inset-0 z-[100] grid place-items-center bg-black/95 backdrop-blur-3xl overflow-hidden p-6 md:p-12 lg:p-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 rounded-full bg-slate-800/80 p-3 text-white transition-opacity hover:opacity-100 opacity-60 flex items-center justify-center hover:bg-slate-700/80 shadow-2xl glass-panel group"
                        aria-label="Close modal"
                    >
                        <svg
                            className="h-6 w-6 stroke-current transition-transform duration-300 group-hover:rotate-90"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative flex max-h-full max-w-full flex-col items-center justify-center gap-10">
                        {/* Image Wrapper */}
                        <motion.div
                            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-slate-700/50 flex align-center"
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="h-auto max-h-[75vh] w-auto max-w-full object-contain pointer-events-none"
                            />

                            {/* Image Info Panel Overlay (Glassy) */}
                            <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 backdrop-blur-md border-t border-slate-700/50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 pointer-events-auto">
                                <div className="flex-1">
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                        {item.category}
                                    </span>
                                    <h2 className="text-3xl font-bold tracking-tight text-white mt-1">
                                        {item.title}
                                    </h2>
                                    {item.description && (
                                        <p className="mt-2 text-base text-slate-300 max-w-2xl leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
