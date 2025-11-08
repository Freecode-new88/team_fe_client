'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = 2025;

  const certs = [
    { src: '/images/certs/gamcare.png', alt: 'GamCare', href: 'https://www.gamcare.org.uk/' },
    { src: '/images/certs/begambleaware.png', alt: 'Be Gamble Aware', href: 'https://www.begambleaware.org/' },
    { src: '/images/certs/bmm.png', alt: 'BMM Testlabs', href: 'https://bmm.com/' },
    { src: '/images/certs/itech.png', alt: 'iTech Labs', href: 'https://itechlabs.com/' },
    { src: '/images/certs/gaminglabs.png', alt: 'Gaming Labs Certified', href: 'https://gaminglabs.com/' },
    { src: '/images/certs/18plus.png', alt: '18+', href: '#' },
  ];

  return (
    <footer
      className="w-full bg-neutral-950 text-gray-300 border-t border-white/10 flex flex-col items-center text-center py-8 px-3 sm:px-6 space-y-6"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* 🔹 Certification Logos */}
      <div
        className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 opacity-90"
        aria-label="certification logos"
      >
        {certs.map((c) => (
          <Link
            key={c.alt}
            href={c.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={c.alt}
            className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={c.src}
              alt={c.alt}
              width={48}
              height={48}
              priority={false}
              loading="lazy"
              decoding="async"
              className="object-contain grayscale brightness-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>

      {/* 🔹 Website Info */}
      <div className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
        <strong className="text-white font-semibold">Thaideal</strong> — ศูนย์รวมโปรโมชัน เครดิตฟรี และโค้ดเครดิตฟรี  
        (อัปเดตทุกวัน) © {year} Thaideal.co สงวนลิขสิทธิ์ทั้งหมด.
      </div>

      {/* 🔹 Footer Nav */}
      <nav
        className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
        aria-label="Footer navigation"
      >
        <Link
          href="/about-us/"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          itemProp="url"
        >
          <span itemProp="name">เกี่ยวกับเรา</span>
        </Link>
        <Link
          href="/contact-us/"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          itemProp="url"
        >
          <span itemProp="name">ติดต่อเรา</span>
        </Link>
        <Link
          href="/privacy/"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          itemProp="url"
        >
          <span itemProp="name">นโยบายความเป็นส่วนตัว</span>
        </Link>
      </nav>

      {/* ✅ JSON-LD Schema (เพิ่ม hasCredential ครบทุกใบรับรอง) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thaideal",
            url: "https://thaideal.co/",
            logo: "https://thaideal.co/icons/thaibet-icon-512.png",
            description:
              "Thaideal เป็นเว็บไซต์ที่ได้รับการรับรองมาตรฐานสากลจากองค์กรด้านความรับผิดชอบและการตรวจสอบเกม เช่น GamCare, BeGambleAware, BMM Testlabs, iTech Labs, Gaming Labs International และ Responsible 18+",
            sameAs: [
              "https://x.com/thaideal",
              "https://t.me/NEUNG55",
              "https://facebook.com/",
              "https://youtube.com/",
            ],
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Responsible Gaming",
                recognizedBy: {
                  "@type": "Organization",
                  name: "GamCare",
                  url: "https://www.gamcare.org.uk/",
                },
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Responsible Gaming",
                recognizedBy: {
                  "@type": "Organization",
                  name: "BeGambleAware",
                  url: "https://www.begambleaware.org/",
                },
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Gaming Certification",
                recognizedBy: {
                  "@type": "Organization",
                  name: "BMM Testlabs",
                  url: "https://bmm.com/",
                },
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Game Fairness",
                recognizedBy: {
                  "@type": "Organization",
                  name: "iTech Labs",
                  url: "https://itechlabs.com/",
                },
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Game Testing Certification",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Gaming Labs International",
                  url: "https://gaminglabs.com/",
                },
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Responsible Age Policy",
                recognizedBy: {
                  "@type": "Organization",
                  name: "18+ Responsible Gaming",
                  url: "#",
                },
              },
            ],
          }),
        }}
      />
    </footer>
  );
}
