
import { useEffect, useState } from 'react';
import './App.css';
import './Boardgame.css';

type Theme = 'light' | 'dark';

type PageProps = {
  theme: Theme;
  toggleTheme: () => void;
};

function ThemeToggle({ theme, toggleTheme }: PageProps) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Aktifkan ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Aktifkan ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.2 15.5A8.5 8.5 0 0 1 8.5 3.8 8.5 8.5 0 1 0 20.2 15.5Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l-1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      )}
    </button>
  );
}

function HeaderActions({ theme, toggleTheme }: PageProps) {
  return (
    <div className="header-actions">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <a className="button button-outline header-login" href="/404">
        Masuk
      </a>

      <a className="button button-primary header-register" href="/404">
        Daftar Sekarang
      </a>
    </div>
  );
}

function HomePage({ theme, toggleTheme }: PageProps) {
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/#beranda" aria-label="Cek Fakta LMS, beranda">
            <img src="/cekfakta-logo.png" alt="Cek Fakta" />
          </a>

          <nav className="main-nav" aria-label="Navigasi utama">
            <a className="nav-link active" href="/#beranda" aria-current="page">
              Beranda
            </a>
            <a className="nav-link" href="/#kelas">Kelas</a>
            <a className="nav-link" href="/#tentang">Tentang Kami</a>
            <a
              className="nav-link"
              href="https://cekfakta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CekFakta
            </a>
            <a className="nav-link" href="/boardgame">
              Boardgame
            </a>
          </nav>

          <HeaderActions theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="beranda">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Ruang Belajar Literasi Digital
              </div>

              <h1>
                Jadilah lebih cerdas dalam <span>memahami informasi.</span>
              </h1>

              <p className="hero-description">
                Dunia digital dipenuhi beragam informasi. Yuk, bekali dirimu
                dengan kemampuan memeriksa fakta, mengenali hoaks, dan
                memahami informasi secara kritis.
              </p>

              <div className="hero-actions">
                <a className="button button-primary button-large" href="/#kelas">
                  Jelajahi Kelas
                  <span aria-hidden="true">→</span>
                </a>
                <a className="button button-text button-large" href="/#tentang">
                  Kenali Cek Fakta
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="hero-note">
                <span className="hero-note-icon" aria-hidden="true">✓</span>
                Belajar mandiri, fleksibel, dan terbuka untuk semua
              </div>
            </div>

            <div className="hero-visual" aria-label="Ilustrasi pembelajaran literasi digital">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="visual-decoration decoration-one">✦</div>
              <div className="visual-decoration decoration-two">✳</div>
              <div className="visual-decoration decoration-three">✦</div>

              <div className="visual-main-card">
                <div className="visual-card-top">
                  <span className="visual-card-label">DIGITAL LITERACY</span>
                  <span className="visual-card-status">
                    <span /> Learning
                  </span>
                </div>

                <div className="visual-globe">
                  <div className="globe-ring ring-one" />
                  <div className="globe-ring ring-two" />
                  <div className="globe-meridian" />
                  <div className="globe-equator" />
                  <div className="globe-center">CF</div>
                </div>

                <div className="visual-card-caption">
                  <span>Think critically.</span>
                  <strong>Check the facts.</strong>
                </div>
              </div>

              <div className="floating-card floating-card-top">
                <span className="floating-icon purple">✓</span>
                <span>
                  <strong>Periksa fakta</strong>
                  <small>Lebih cermat setiap hari</small>
                </span>
              </div>

              <div className="floating-card floating-card-bottom">
                <span className="floating-icon pink">✦</span>
                <span>
                  <strong>Belajar hal baru</strong>
                  <small>Selangkah lebih bijak</small>
                </span>
              </div>

              <div className="visual-bottom-label">
                <span className="visual-bottom-dot" />
                Belajar untuk dunia digital yang lebih sehat
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Nilai pembelajaran">
          <div className="container trust-inner">
            <div className="trust-item">
              <span className="trust-icon blue">◎</span>
              <span>Literasi Digital</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon purple">✦</span>
              <span>Berpikir Kritis</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon pink">✓</span>
              <span>Periksa Fakta</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon orange">♡</span>
              <span>Belajar Sepanjang Hayat</span>
            </div>
          </div>
        </section>

        <section className="courses-section section-padding" id="kelas">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">MULAI PERJALANANMU</span>
                <h2>Belajar dari kelas pilihan</h2>
                <p>
                  Pilih kelas yang sesuai dengan kebutuhanmu dan mulai
                  tingkatkan kemampuan literasi digital.
                </p>
              </div>
              <a className="text-link" href="/404">
                Lihat semua kelas <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="course-grid">
              <article className="course-card">
                <div className="course-art course-art-debunking">
                  <img
                    className="course-thumbnail"
                    src="/kelas-cekfakta.png"
                    alt="Thumbnail Kelas Cek Fakta (Debunking)"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <div className="course-body">
                  <div className="course-meta">
                    <span className="course-category category-blue">DEBUNKING</span>
                    <span className="course-level">Kelas pembelajaran</span>
                  </div>
                  <h3>Kelas Cek Fakta (Debunking)</h3>
                  <p>
                    Pelajari cara memeriksa informasi, menelusuri sumber,
                    dan mengungkap fakta di balik informasi yang meragukan.
                  </p>
                  <a
                    className="course-link"
                    href="https://institute.mafindo.or.id/courses/kelascekfakta/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pelajari kelas <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>

              <article className="course-card">
                <div className="course-art course-art-prebunking">
                  <img
                    className="course-thumbnail"
                    src="/kelas-prebunking.png"
                    alt="Thumbnail Kelas Cegah Hoaks (Prebunking)"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <div className="course-body">
                  <div className="course-meta">
                    <span className="course-category category-purple">PREBUNKING</span>
                    <span className="course-level">Kelas pembelajaran</span>
                  </div>
                  <h3>Kelas Cegah Hoaks (Prebunking)</h3>
                  <p>
                    Kenali teknik manipulasi informasi dan bangun kemampuan
                    untuk mengenali hoaks sebelum mempercayainya.
                  </p>
                  <a
                    className="course-link"
                    href="https://institute.mafindo.or.id/courses/kelas-prebunking/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pelajari kelas <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section section-padding" id="tentang">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-video-frame">
                <iframe
                  src="https://www.youtube.com/embed/KCVOQQnGWsk?si=_3Lk5J-gWx7f0KlL"
                  title="Video pengenalan CekFakta"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="about-content">
              <span className="section-kicker">TENTANG KAMI</span>
              <h2>Mengenal LMS CekFakta</h2>
              <p>
                LMS Cekfakta merupakan bagian dari CekFakta.com.
                CekFakta.com adalah sebuah proyek kolaboratif pengecekan
                fakta yang diinisiasi MAFINDO (Masyarakat Anti Fitnah
                Indonesia), AJI (Aliansi Jurnalis Independen) dan AMSI
                (Asosiasi Media Siber Indonesia).
              </p>
              <p>
                Kolaborasi ini diluncurkan di ‘Trusted Media Summit 2018’
                pada Sabtu, 5 Mei 2018 di Jakarta dengan melibatkan puluhan
                media online di Indonesia serta jejaring ratusan pemeriksa
                fakta di seluruh Indonesia.
              </p>
              <a
                className="button button-outline"
                href="https://cekfakta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kenali CekFakta <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="cta-section" id="daftar">
          <div className="container">
            <div className="cta-card">
              <div className="cta-decoration cta-decoration-one" />
              <div className="cta-decoration cta-decoration-two" />
              <div className="cta-content">
                <span className="cta-kicker">LANGKAH KECIL, DAMPAK BESAR</span>
                <h2>Siap menjadi lebih cerdas memilah informasi?</h2>
                <p>
                  Mulai perjalanan belajarmu hari ini. Jadilah bagian dari
                  masyarakat digital yang lebih kritis dan bertanggung jawab.
                </p>
                <a className="button button-light" href="/404">
                  Mulai Belajar <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="cta-graphic" aria-hidden="true">
                <div className="cta-graphic-ring" />
                <div className="cta-graphic-core">CF</div>
                <span className="cta-graphic-star star-a">✦</span>
                <span className="cta-graphic-star star-b">✳</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="/#beranda" aria-label="Cek Fakta LMS, kembali ke beranda">
              <img src="/cekfakta-logo.png" alt="Cek Fakta" />
            </a>
            <p>
              Bersama membangun masyarakat yang lebih kritis,
              bijak, dan tangguh menghadapi misinformasi.
            </p>
          </div>

          <div className="footer-column">
            <h2>Navigasi</h2>
            <a href="/#beranda">Beranda</a>
            <a href="/#kelas">Kelas</a>
            <a href="/#tentang">Tentang Kami</a>
          </div>

          <div className="footer-column">
            <h2>Informasi</h2>
            <a href="https://cekfakta.com/" target="_blank" rel="noopener noreferrer">
              CekFakta.com
            </a>
          </div>

          <div className="footer-column">
            <h2>Mulai Belajar</h2>
            <a href="/404">Masuk ke akun</a>
            <a href="/404">Daftar sebagai peserta</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} LMS Cek Fakta. Bagian dari upaya
            membangun ruang digital yang sehat.
          </p>
          <a href="/#beranda">Kembali ke atas ↑</a>
        </div>
      </footer>
    </div>
  );
}

function BoardgamePage({ theme, toggleTheme }: PageProps) {
  return (
    <div className="app boardgame-page">
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/#beranda" aria-label="Cek Fakta LMS, beranda">
            <img src="/cekfakta-logo.png" alt="Cek Fakta" />
          </a>

          <nav className="main-nav" aria-label="Navigasi utama">
            <a className="nav-link" href="/#beranda">Beranda</a>
            <a className="nav-link" href="/#kelas">Kelas</a>
            <a className="nav-link" href="/#tentang">Tentang Kami</a>
            <a
              className="nav-link"
              href="https://cekfakta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CekFakta
            </a>
            <a className="nav-link active" href="/boardgame" aria-current="page">
              Boardgame
            </a>
          </nav>

          <HeaderActions theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      <main id="main-content">
        <section className="boardgame-hero">
          <div className="container boardgame-hero-grid">
            <div className="boardgame-copy">
              <span className="boardgame-eyebrow">
                BELAJAR LEWAT PERMAINAN
              </span>

              <h1>
                Boardgame<span>Fandom Warnas</span>
              </h1>

              <p className="boardgame-description">
                Sebuah permainan tentang persaingan dua warung nasi dan
                bagaimana informasi dapat digunakan untuk memengaruhi pilihan
                orang lain. Di negeri Damainesia, terdapat dua warung nasi
                favorit masyarakat. Keduanya memiliki pelanggan setia. Namun,
                seiring berjalannya waktu, Asosiasi Warnas Damainesia akan
                memilih warnas terbaik di negeri itu. Para pelanggan setia pun
                berlomba agar warnas pilihannya menjadi yang terbaik. Sebagian
                ada juga yang menyebarkan informasi salah agar saingannya
                banyak haternya.
              </p>

              <p className="boardgame-question">
                Apakah warnas pilihanmu akan menjadi yang terbaik?
              </p>
            </div>

            <div className="boardgame-art-column">
              <div className="boardgame-card">
                <div className="boardgame-art-wrap">
                  <img
                    className="boardgame-art"
                    src="/warnas.png"
                    alt="Thumbnail permainan BoardgameFandom Warnas"
                    loading="eager"
                    decoding="async"
                  />
                </div>

             <div className="boardgame-card-footer">
  <a
    className="button button-primary button-large boardgame-download"
    href="https://drive.google.com/drive/folders/1m4Ce6k3lWbwZuFfSQfDnNSFB76uJvyD3?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download Boardgame Fandom Warnas (terbuka di tab baru)"
  >
    Download Boardgame
    <span aria-hidden="true">↗</span>
  </a>

  <span className="sr-only">
    Tautan akan membuka Google Drive di tab baru.
  </span>
</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main boardgame-footer-main">
          <div className="footer-brand">
            <a href="/#beranda" aria-label="Cek Fakta LMS, kembali ke beranda">
              <img src="/cekfakta-logo.png" alt="Cek Fakta" />
            </a>
            <p>
              Bersama membangun masyarakat yang lebih kritis, bijak,
              dan tangguh menghadapi misinformasi.
            </p>
          </div>

          <div className="footer-column">
            <h2>Navigasi</h2>
            <a href="/#beranda">Beranda</a>
            <a href="/#kelas">Kelas</a>
            <a href="/#tentang">Tentang Kami</a>
            <a href="/boardgame" aria-current="page">Boardgame</a>
          </div>

          <div className="footer-column">
            <h2>Informasi</h2>
            <a
              href="https://cekfakta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CekFakta.com
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} LMS Cek Fakta. Bagian dari upaya
            membangun ruang digital yang sehat.
          </p>
          <a href="#main-content">Kembali ke atas ↑</a>
        </div>
      </footer>
    </div>
  );
}

function NotFoundPage({ theme, toggleTheme }: PageProps) {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.assign('/');
    }
  };

  return (
    <div className="app not-found-page">
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/" aria-label="Cek Fakta LMS, beranda">
            <img src="/cekfakta-logo.png" alt="Cek Fakta" />
          </a>

          <div className="header-actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </header>

      <main id="main-content" className="not-found-main">
        <section className="not-found-section" aria-labelledby="not-found-title">
          <div className="not-found-content">
            <div className="not-found-illustration" aria-hidden="true">
              <span className="not-found-orbit not-found-orbit-one" />
              <span className="not-found-orbit not-found-orbit-two" />
              <span className="not-found-star not-found-star-one">✦</span>
              <span className="not-found-star not-found-star-two">✳</span>
              <span className="not-found-number">404</span>
              <span className="not-found-decoration">?</span>
            </div>

            <span className="not-found-eyebrow">HALAMAN TIDAK DITEMUKAN</span>

            <h1 id="not-found-title">
              Sepertinya kamu tersesat di dunia digital.
            </h1>

            <p className="not-found-description">
              Halaman yang kamu cari mungkin sudah dipindahkan, tidak tersedia,
              atau alamatnya kurang tepat. Jangan khawatir, kamu bisa kembali
              dan melanjutkan perjalanan belajar dari halaman utama.
            </p>

            <div className="not-found-actions">
              <a className="button button-primary button-large" href="/">
                Kembali ke Beranda
                <span aria-hidden="true">→</span>
              </a>

              <button
                className="button button-outline button-large"
                type="button"
                onClick={goBack}
              >
                Kembali ke Halaman Sebelumnya
              </button>
            </div>

            <p className="not-found-code">
              Kode kesalahan: <strong>404</strong>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer not-found-footer">
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} LMS Cek Fakta. Bagian dari upaya
            membangun ruang digital yang sehat.
          </p>
          <a href="/">Beranda</a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('lms-theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lms-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'LMS Cek Fakta';
    } else if (currentPath === '/boardgame') {
      document.title = 'Boardgame Fandom Warnas | LMS Cek Fakta';
    } else {
      document.title = '404 | Halaman Tidak Ditemukan - LMS Cek Fakta';
    }
  }, [currentPath]);

  if (currentPath === '/') {
    return <HomePage theme={theme} toggleTheme={toggleTheme} />;
  }

  if (currentPath === '/boardgame') {
    return <BoardgamePage theme={theme} toggleTheme={toggleTheme} />;
  }

  return <NotFoundPage theme={theme} toggleTheme={toggleTheme} />;
}

export default App;
