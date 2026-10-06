import { Head } from '@inertiajs/react';

const sections = [
    {
        id: 'home',
        image: '/Images/40.jpeg',
        eyebrow: 'Selamat datang di',
        title: 'Kenali Umbul Gemulo, Mata Air Jernih dari Bulukerto',
        description: 'Temukan suasana alam yang menenangkan.',
        link: '#tentang',
        linkLabel: 'Jelajahi',
    },
    {
        id: 'tentang',
        image: '/Images/39.jpeg',
        eyebrow: 'Tentang kami',
        title: 'Dekat dengan alam',
        description: 'Nikmati keindahan dan kesejukan Umbul Gemulo.',
    },
    {
        id: 'galeri',
        image: '/Images/38.jpeg',
        eyebrow: 'Galeri',
        title: 'Keindahan setiap sudut',
        description: 'Lihat momen dan pemandangan dari Umbul Gemulo.',
    },
];

export default function Main() {
    return (
        <>
            <Head title="Umbul Gemulo" />

            <header className="absolute inset-x-0 top-0 z-20">
                <nav
                    aria-label="Navigasi utama"
                    className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white"
                >
                    <a href="#home" className="text-lg font-semibold">
                        Umbul Gemulo
                    </a>

                    <div className="flex gap-6 text-sm">
                        <a className="hover:underline" href="#home">Home</a>
                        <a className="hover:underline" href="#tentang">Tentang</a>
                        <a className="hover:underline" href="#galeri">Galeri</a>
                    </div>
                </nav>
            </header>

            <main>
                {sections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="relative isolate flex min-h-screen scroll-mt-0 items-end overflow-hidden bg-gray-900 px-6 py-24 text-white"
                    >
                        <img
                            src={section.image}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 -z-20 h-full w-full object-cover"
                        />

                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 bg-black/50"
                        />

                        <div className="mx-[50px] w-full">
                            <h1 className="max-w-3xl text-header-1 font-bold tracking-tight sm:text-6xl">
                                <p>Kenali <span className='text-primary'>Umbul Gemulo</span>, Mata Air Jernih dari Bulukerto</p>
                            </h1>

                            <p className="mt-5 max-w-xl text-regular text-white">
                                Kenali mata air di Desa Bulukerto, Kota Batu, yang menjadi sumber air, budaya, dan kebanggaan masyarakat setempat.
                            </p>

                            
                                <a
                                    href={section.link}
                                    className="mt-8 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-gray-800 transition hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                >
                                    Kenali Lebih Dekat
                                </a>

                        </div>
                    </section>
                ))}
            </main>
        </>
    );
}