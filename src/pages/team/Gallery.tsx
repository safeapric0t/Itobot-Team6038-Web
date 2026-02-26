import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GALLERY_ITEMS, type GalleryItem } from "../../features/gallery/galleryData";
import { GalleryCard } from "../../components/gallery/GalleryCard";
import { GalleryFilter } from "../../components/gallery/GalleryFilter";
import { ImageModal } from "../../components/gallery/ImageModal";

const CATEGORIES = ["All", "Team", "Robot", "Action", "Fun", "Awards", "Visitors", "Mach"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#01040a] pb-32 pt-32">
      {/* Background HUD Elements */}
      <div className="museum-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12">
        {/* Cinematic Header */}
        <header className="mb-20 flex flex-col items-start md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-cyan-500" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-cyan-400">
                  ITOBOT 6038 // Media_Archive
                </span>
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              </div>
              <h1 className="text-6xl font-black uppercase tracking-tighter text-white md:text-8xl">
                The <span className="text-transparent stroke-white stroke-1 bg-clip-text bg-gradient-to-br from-white to-slate-500 italic">Images</span>
              </h1>
              <p className="mt-8 text-lg font-medium leading-relaxed text-slate-400 max-w-xl">
                Accessing centralized media repository for <span className="text-cyan-400">ITOBOT 6038</span>.
                Full resolution buffers available for all logged exhibition entries.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <div className="glass-panel border-cyan-500/20 p-4 rounded-none border-l-4">
              <span className="block text-2xl font-black text-cyan-400 leading-none">{GALLERY_ITEMS.length}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Total_files</span>
            </div>
          </motion.div>
        </header>

        {/* Filter Navigation */}
        <div className="mb-12">
          <GalleryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Cinematic Exhibition Grid (Masonry) */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid mb-6">
              <GalleryCard item={item} onFullscreen={setSelectedItem} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-40 text-center py-40 border-y border-white/5"
          >
            <span className="text-cyan-500 font-mono text-sm">[ ERROR: NO_DATA_FOUND ]</span>
            <h2 className="mt-4 text-2xl font-bold text-white uppercase italic">Sector currently uninhabited</h2>
          </motion.div>
        )}
      </div>

      {/* Fullscreen Image Preview */}
      <ImageModal
        isOpen={!!selectedItem}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
