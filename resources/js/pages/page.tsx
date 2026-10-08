import { Head } from "@inertiajs/react";

const sections = [
    {
        id: "home",
        image: "/Images/40.jpeg",
        eyebrow: "Selamat datang di",
        title: "Kenali Umbul Gemulo, Mata Air Jernih dari Bulukerto",
        description: "Temukan suasana alam yang menenangkan.",
        link: "#tentang",
        linkLabel: "Jelajahi",
    },
    {
        id: "tentang",
        image: "/Images/39.jpeg",
        eyebrow: "Tentang kami",
        title: "Dekat dengan alam",
        description: "Nikmati keindahan dan kesejukan Umbul Gemulo.",
    },
    {
        id: "galeri",
        image: "/Images/38.jpeg",
        eyebrow: "Galeri",
        title: "Keindahan setiap sudut",
        description: "Lihat momen dan pemandangan dari Umbul Gemulo.",
    },
];

export default function Main() {
    return (
        <>
            <Head title="Umbul Gemulo" />

            <header className="absolute flex justify-center inset-x-0 top-0 z-20">
                <nav
                    aria-label="Navigasi utama"
                    className="mx-auto w-full flex max-w-7xl items-center justify-between px-6 py-5 text-white fixed"
                >
                    <a href="#home" className="text-lg font-semibold">
                        Umbul Gemulo
                    </a>

                    <div className="flex gap-6 text-sm">
                        <a
                            className="hover:underline hover:text-primary duration-300 ease-in-out"
                            href="#home"
                        >
                            Beranda
                        </a>
                        <a
                            className="hover:underline hover:text-primary duration-300 ease-in-out"
                            href="#tentang"
                        >
                            Tentang
                        </a>
                        <a
                            className="hover:underline hover:text-primary duration-300 ease-in-out"
                            href="#tentang"
                        >
                            Informasi
                        </a>
                        <a
                            className="hover:underline hover:text-primary duration-300 ease-in-out"
                            href="#tentang"
                        >
                            Galeri
                        </a>
                        <a
                            className="hover:underline hover:text-primary duration-300 ease-in-out"
                            href="#galeri"
                        >
                            Kontak
                        </a>
                    </div>
                </nav>
            </header>
            <div className="relative isolate min-h-screen overflow-hidden">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-[50%] bg-primary/30"
                />
                <main className="relative z-10">
                    <section className="relative isolate flex min-h-screen scroll-mt-0 items-end overflow-hidden bg-gray-900 px-6 py-24 text-white">
                        <img
                            src="/Images/40.jpeg"
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 -z-20 h-full w-full object-cover mask-linear opacity-70"
                        />

                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10"
                        />

                        <div className="mx-[50px] w-full">
                            <h1 className="max-w-3xl text-header-1 font-bold tracking-tight sm:text-6xl">
                                <p>
                                    Kenali{" "}
                                    <span className="text-primary">
                                        Umbul Gemulo
                                    </span>
                                    , Mata Air Jernih dari Bulukerto
                                </p>
                            </h1>

                            <p className="mt-5 max-w-xl text-regular text-white">
                                Kenali mata air di Desa Bulukerto, Kota Batu,
                                yang menjadi sumber air, budaya, dan kebanggaan
                                masyarakat setempat.
                            </p>

                            <div className="flex gap-[8px]">
                                <a className="mt-8 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-gray-800 transition hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer">
                                    Kenali Lebih Dekat
                                </a>
                                <a className="mt-8 inline-flex rounded-full bg-secondary px-5 py-3 font-semibold text-gray-800 transition hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white text-white cursor-pointer">
                                    Panduan Berkunjung
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="relative isolate flex min-h-screen scroll-mt-0 items-end overflow-hidden bg-gray-900 px-6 py-24 text-white">
                        <img
                            src="/Images/36.jpeg"
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 -z-20 h-full w-full object-cover mask-linear opacity-70 blur-xs"
                        />

                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10"
                        />

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute  top-40 -z-20 h-[120%] w-[40rem] rounded-full bg-secondary opacity-90 blur-[120px]"
                        />

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-25 top-200 -z-20 h-[120%] w-[40rem] rounded-full bg-primary opacity-90 blur-[120px] scale-200"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-48 -left-20 -z-20 h-96 w-[36rem] rounded-full bg-ternary opacity-70 blur-[120px] scale-200"
                        />

                        <div className="absolute inset-0 -z-20 h-full w-full p-24">
                            <div className="flex flex-col mx-[50px] w-full gap-[20px] mt-[50px]">
                                <h1 className="max-w-3xl text-header-1 font-bold tracking-tight sm:text-6xl">
                                    <p>Tentang</p>
                                </h1>

                                <p className="mt-5 max-w-xl text-regular text-white">
                                    Umbul Gemulo adalah mata air jernih di Desa
                                    Bulukerto, Kecamatan Bumiaji, Kota Batu.
                                    Menurut cerita turun-temurun, sumber ini
                                    sudah ada sejak puluhan hingga ratusan tahun
                                    lalu dan dimanfaatkan warga untuk mandi,
                                    mencuci, serta mengairi lahan. Nama Gemulo
                                    dipercaya berasal dari "gemuleng", yang
                                    menggambarkan asap mengepul dan berkumpul
                                    menjadi satu, merujuk pada mata air yang
                                    menghidupi tiga dukuh. Hingga kini, tempat
                                    ini dijaga bersama oleh warga sebagai bagian
                                    dari tradisi dan budaya setempat.
                                </p>
                                <div className="flex gap-[72px]">
                                    <div className="w-[350px] h-[263px] rounded-[25px] object-cover overflow-hidden">
                                        <img
                                            src="Images/18.jpeg"
                                            className="-z-20 h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="w-[350px] h-[263px] rounded-[25px] object-cover overflow-hidden">
                                        <img
                                            src="Images/24.jpeg"
                                            className="-z-20 h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="w-[350px] h-[263px] rounded-[25px] object-cover overflow-hidden">
                                        <img
                                            src="Images/43.jpeg"
                                            className="-z-20 h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
