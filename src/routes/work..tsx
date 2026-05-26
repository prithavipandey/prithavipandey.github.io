
function ExperienceCard({
  label,
  title,
  image,
  alt,
  copy,
  aspect,
}: {
  label: string;
  title: string;
  image: string;
  alt: string;
  copy: string;
  aspect: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden bg-card/60 border border-foreground/10 hover:border-electric/30 transition backdrop-blur-xl"
    >
      <div className={`relative ${aspect} w-full overflow-hidden bg-foreground/[0.04]`}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
      <div className="p-5 md:p-6">
        <div className="text-[10px] uppercase tracking-[0.18em] text-electric/90">{label}</div>
        <div className="mt-2 text-lg md:text-xl font-semibold tracking-tight text-foreground leading-snug">
          {title}
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{copy}</p>
      </div>
    </motion.div>
  );
}
