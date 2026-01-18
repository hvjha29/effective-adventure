export default function Home() {
  return (
    <main>
      <header className="relative min-h-[90vh] flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden">
          <img alt="Stunning mountain range landscape" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaMrqclRyQvS0gWy_1BamglynI9EtKj6ZqtcmuKkHrfZ6dZdBONKC_wsduqwV1g4lbF6kvMJITT0Og9EzXc_-D7Zk9oPPBxjlPJ9nqmN_13sC0z8omG6R-6OkEj-Lf0xswQhBvFZq-t4YIJC9o4Sw9S-PE6phb5xMFe0ZZB9ho7quM3-ZNA8NOvMFVnOQsY_rYJ8ZEQEYhRBBIfMAWqIyc9D9-oR-xZMCEtl3dwEdbp7k5rGW9R3F_DxhC0pI6CEd8vXskeBqUMsc" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-xl">
            <span className="inline-block text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">Welcome Traveler</span>
            <h1 className="text-5xl lg:text-7xl font-display leading-[1.1] mb-8 text-stone-900 dark:text-stone-50">
              Alisha's <br />
              <span className="italic font-normal">Travel</span> <br />
              Adventures
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
              Building a home for all my travel stories, itineraries, tips, and the little moments that made each trip special. From the misty peaks of the Andes to the quiet cobblestones of European villages, I'm sharing the world as I see it.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="material-icons-outlined text-primary mt-1">auto_awesome</span>
                <p className="text-stone-700 dark:text-stone-300">Curated travel itineraries for the modern explorer.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="material-icons-outlined text-primary mt-1">photo_camera</span>
                <p className="text-stone-700 dark:text-stone-300">Visual journals capturing the essence of every destination.</p>
              </div>
            </div>
            <div className="mt-12">
              <a className="group inline-flex items-center space-x-3 text-stone-900 dark:text-stone-100 font-semibold border-b-2 border-primary pb-1" href="#journals">
                <span>Explore the Journals</span>
                <span className="material-icons-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="py-24 px-6 max-w-7xl mx-auto" id="journals">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display mb-4">Journals</h2>
          <div className="w-12 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="masonry-grid">
          {/* Blog Post 1: Greek Architecture */}
          <a href="/blog/greek-architecture" className="masonry-item group cursor-pointer block">
            <div className="relative overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-800">
              <img alt="Greek Statue" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" src="/images/europe/greece/geometric_amphora.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest">History & Culture</span>
                  <h3 className="text-xl font-display">Greek Architecture</h3>
                  <p className="text-sm mt-1 opacity-90">A historical exploration.</p>
                </div>
              </div>
            </div>
          </a>

          {/* Blog Post 2: Japan */}
          <div className="masonry-item group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-800">
              <img alt="Kyoto Temple" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb4yFKY50nLVwdg1WqDjlgZA7FjtIbCwxT76Lj9e5gFTS7z7VoDYnWpm0ank7wPf96oUTCw_h3RzPb9olSV2zQFqSJcwQmDFttOCI65Mo7xMoX2wrxyBpWp3TCAR1TMtEpBAEkZXvqlnhzZLZhj7ka4Itp6pFFSDpM8QjJKDDQhV39Fj6nNce4m5mBtS5nEb__fw_F8aETlVFxh66NiED3j2IMdQRdm5pBq4GJ7b-GnVoPoxH51AhYCPAHanp2CFFDMgxUzah6PXA" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest">Travel Guides</span>
                  <h3 className="text-xl font-display">Japan Trip</h3>
                  <p className="text-sm mt-1 opacity-90">Cherry Blossoms & Temples (Coming Soon)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3: Sydney */}
          <div className="masonry-item group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-800">
              {/* Using a placeholder for Sydney - replicating the beach vibe from before */}
              <img alt="Sydney Beach" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqjRn3dh1777m1brOMJSgeEo3j99apXLzny16R7lFsir2XdBi7n4ziZUOdxBkVMCkjPQcTppeTokdlauZr7ozfZcRl4LkvLO5Lo2edurECZwFol80iNK7ZlnhWfIKgdS87SW5vCSIxgWqkZgleEkYo3UQ9xCnIxVfb-TpzDshnE9PN63fNxlb7TMrN8UHId-J2pzRMvPfH_8P3MoesnEZdnvTJS1fBk08x0Mv8SqFLUP4fdZnAlCkTUlthDe97OmZcH0dxA59Bzzw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest">Itineraries</span>
                  <h3 className="text-xl font-display">Sydney 6-Day</h3>
                  <p className="text-sm mt-1 opacity-90">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 4: Europe */}
          <div className="masonry-item group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-800">
              <img alt="Europe Village" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrgupBuVgmXTDn8HUB8Y8m-k8KqPwkwLcVpLg3GccDLSbNmBPTuYMNLQPiiI81GWgvif4gc9pWEoCFBKN3QtUEYorF_NrGnQ09GAaLqx2HQR5Sjjay9p0kuQdPkiko95u7P3TPeeA3gajQqGprpdriz2aWvlEoR6Bo0cv1sgbPXMt1y5KjJA80UlVXftd5fUK-9R81idYLe7Q6oCCXZCKlFvHh5W7WPNZCDYQFBvhsTOHadLOZWaLgn1Jh7tXXz2JrtCFgSlBOuVI" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest">Travel Stories</span>
                  <h3 className="text-xl font-display">Europe Highlights</h3>
                  <p className="text-sm mt-1 opacity-90">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-stone-100 dark:bg-stone-900 py-24 px-6" id="itineraries">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Where to Next?</span>
            <h2 className="text-4xl font-display mt-2">Curated Itineraries</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-background-light dark:bg-background-dark p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-3xl">map</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">Greece — 10-Day Classic</h3>
                  <p className="text-stone-500 text-sm">10 Days • May–Sept • Adventure</p>
                </div>
              </div>
              <a className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center" href="/trips/greece">
                View Details
              </a>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-3xl">landscape</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">Swiss Alps — Alpine Serenity</h3>
                  <p className="text-stone-500 text-sm">6 Days • May–Sept • Nature</p>
                </div>
              </div>
              <a className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center" href="/trips/europe">
                View Details
              </a>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-3xl">fort</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">Scotland — Highlands & Skye</h3>
                  <p className="text-stone-500 text-sm">7 Days • May–Sept • Raw Beauty</p>
                </div>
              </div>
              <a className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center" href="/trips/scotland">
                View Details
              </a>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-3xl">museum</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">Spain — Cultural Soul</h3>
                  <p className="text-stone-500 text-sm">10 Days • Apr–Oct • History</p>
                </div>
              </div>
              <a className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center" href="/trips/spain">
                View Details
              </a>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-3xl">coffee</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">Istanbul — Bosphorus Vibes</h3>
                  <p className="text-stone-500 text-sm">4 Days • April–June • Fusion</p>
                </div>
              </div>
              <a className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center" href="/trips/istanbul">
                View Details
              </a>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-3xl">restaurant</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">London — City Essentials</h3>
                  <p className="text-stone-500 text-sm">4 Days • May–June/Sept • Cultural</p>
                </div>
              </div>
              <a className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center" href="/trips/london">
                View Details
              </a>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-3xl">beach_access</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">Sydney — Coastal Wonders</h3>
                  <p className="text-stone-500 text-sm">6 Days • Sept–Nov • Scenic</p>
                </div>
              </div>
              <a className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center" href="/trips/sydney">
                View Details
              </a>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary text-3xl">hiking</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">Seoul & Gyeongju</h3>
                  <p className="text-stone-500 text-sm">4 Days • Apr–May/Sept • Modern & Historic</p>
                </div>
              </div>
              <a className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center" href="/trips/seoul">
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-display mb-6">Stay for the journey</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-10">
            Subscribe to receive my monthly newsletter with travel hacks, gear reviews, and exclusive stories from the road.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input className="flex-grow px-6 py-4 rounded-full border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:text-white focus:ring-primary focus:border-primary" placeholder="Your email address" type="email" />
            <button className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:opacity-90 transition-opacity" type="submit">
              Join Me
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
