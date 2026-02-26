import { motion } from "framer-motion";
import { type FC } from "react";

interface GalleryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export const GalleryFilter: FC<GalleryFilterProps> = ({
    categories,
    activeCategory,
    onCategoryChange,
}) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-8 md:gap-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`relative px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all
            ${activeCategory === category
                            ? "text-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                            : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                        }
            border border-slate-700/50 rounded-full glass-panel
          `}
                >
                    {category}

                    {/* Active Glow Indicator */}
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeFilterGlow"
                            className="absolute pointer-events-none inset-0 -z-10 rounded-full bg-cyan-500/10 blur-[4px] border border-cyan-400/50"
                            initial={false}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
};
