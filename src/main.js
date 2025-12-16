// Header Component
const headerContent = `
<nav class="bg-white shadow sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex items-center">
                <a href="/" class="flex-shrink-0 flex items-center gap-2">
                    <!-- Placeholder Logo -->
                    <div class="h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl">S</div>
                    <span class="font-bold text-xl text-slate-900 tracking-tight">SS Water Tank</span>
                </a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
                <a href="/" class="text-slate-600 hover:text-blue-600 font-medium transition">Home</a>
                <div class="relative group">
                    <button class="text-slate-600 hover:text-blue-600 font-medium transition flex items-center gap-1">
                        Products
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block border border-slate-100">
                        <a href="/ss-water-tank-500l.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">500 Litre</a>
                        <a href="/ss-water-tank-1000l.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">1000 Litre</a>
                        <a href="/ss-water-tank-2000l.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">2000 Litre</a>
                        <a href="/ss-water-tank-5000l.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">5000 Litre</a>
                    </div>
                </div>
                <a href="/ss-water-tank-price.html" class="text-slate-600 hover:text-blue-600 font-medium transition">Price List</a>
                <a href="/manufacturer-india.html" class="text-slate-600 hover:text-blue-600 font-medium transition">About</a>
                <a href="/blog.html" class="text-slate-600 hover:text-blue-600 font-medium transition">Blog</a>
                <a href="/contact.html" class="text-slate-600 hover:text-blue-600 font-medium transition">Contact</a>
            </div>
            <div class="hidden md:flex items-center">
                <a href="https://wa.me/919999999999" target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition flex items-center gap-2">
                    <span>WhatsApp</span>
                </a>
            </div>
            <div class="flex items-center md:hidden">
                <button id="mobile-menu-btn" class="text-slate-600 hover:text-slate-900 p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Home</a>
            <a href="/ss-water-tank-500l.html" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md ml-4">500L Tank</a>
            <a href="/ss-water-tank-1000l.html" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md ml-4">1000L Tank</a>
            <a href="/ss-water-tank-price.html" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Price List</a>
            <a href="/manufacturer-india.html" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">About</a>
            <a href="/contact.html" class="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Contact</a>
        </div>
    </div>
</nav>
`;

// Footer Component
const footerContent = `
<footer class="bg-slate-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-1">
                <div class="flex items-center gap-2 mb-4">
                    <div class="h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl">S</div>
                    <span class="font-bold text-xl text-white tracking-tight">SS Water Tank</span>
                </div>
                <p class="text-sm text-slate-400">Premium stainless steel water tanks for home and industry. Durable, hygienic, and built to last.</p>
            </div>
            <div>
                <h3 class="text-white text-lg font-bold mb-4">Quick Links</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="/" class="hover:text-white transition">Home</a></li>
                    <li><a href="/ss-water-tank-price.html" class="hover:text-white transition">Price List</a></li>
                    <li><a href="/manufacturer-india.html" class="hover:text-white transition">About Us</a></li>
                    <li><a href="/blog.html" class="hover:text-white transition">Blog</a></li>
                    <li><a href="/contact.html" class="hover:text-white transition">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-white text-lg font-bold mb-4">Products</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="/ss-water-tank-500l.html" class="hover:text-white transition">500 Litre Tank</a></li>
                    <li><a href="/ss-water-tank-1000l.html" class="hover:text-white transition">1000 Litre Tank</a></li>
                    <li><a href="/ss-water-tank-2000l.html" class="hover:text-white transition">2000 Litre Tank</a></li>
                    <li><a href="/ss-water-tank-5000l.html" class="hover:text-white transition">Industrial Tanks</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-white text-lg font-bold mb-4">Contact</h3>
                <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>Industrial Area, Jaipur, Rajasthan, India</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <span>+91 99999 99999</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-500">
                <p>© 2025 SS Water Tank. All rights reserved.</p>
                <div class="hidden md:block w-px h-4 bg-slate-700"></div>
                <div class="flex gap-4 flex-wrap justify-center">
                    <a href="/sitemap.xml" class="hover:text-white transition">Sitemap</a>
                    <a href="/privacy.html" class="hover:text-white transition">Privacy Policy</a>
                    <a href="/returns.html" class="hover:text-white transition">Returns & Delivery</a>
                    <a href="/warranty.html" class="hover:text-white transition">Warranty</a>
                </div>
            </div>
            <div class="flex space-x-4">
                <a href="https://facebook.com/sswatertank" target="_blank" class="text-slate-400 hover:text-blue-500 transition">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com/sswatertank" target="_blank" class="text-slate-400 hover:text-pink-600 transition">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://linkedin.com/company/sswatertank" target="_blank" class="text-slate-400 hover:text-blue-700 transition">
                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://youtube.com/sswatertank" target="_blank" class="text-slate-400 hover:text-red-600 transition">
                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
            </div>
        </div>
    </div>
</footer>
<!-- Floating WhatsApp Button -->
<a href="https://wa.me/919999999999" target="_blank" class="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center">
    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-.967-.272-.099-.47-.149-.669.198-.199.347-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
</a>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerEl = document.getElementById('header');
    if (headerEl) headerEl.innerHTML = headerContent;

    // Inject Footer
    const footerEl = document.getElementById('footer');
    if (footerEl) footerEl.innerHTML = footerContent;

    // Mobile Menu Logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Current page active state in nav
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-blue-600');
            link.classList.remove('text-slate-600');
        }
    });
});
