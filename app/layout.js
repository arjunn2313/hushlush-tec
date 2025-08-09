
import "./globals.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/bootstrap.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/aos.css";
import "@css/slick.min.css";
import "@css/style.css";


 export const metadata = {
  title: "Hush Lush Technologies | Digital Marketing, Branding & Web Solutions",
  description:
    "Hush Lush Technologies provides innovative digital marketing, branding, web design, mobile app development, AR/VR, and enterprise solutions across GCC & India. Empowering businesses with creativity and technology.",
  keywords: [
    "Hush Lush Technologies",
    "Digital Marketing GCC",
    "Branding UAE",
    "Web Design Sharjah",
    "Mobile App Development",
    "AR VR Solutions",
    "Enterprise Software UAE",
  ],
  authors: [{ name: "Hush Lush Technologies", url: "https://www.hushlushtechno.com" }],
  openGraph: {
    title: "Hush Lush Technologies | Digital Marketing & Tech Solutions",
    description:
      "Transforming ideas into reality with digital marketing, branding, web & mobile development, and enterprise software solutions across GCC & India.",
    url: "https://www.hushlushtechno.com",
    siteName: "Hush Lush Technologies",
    images: [
      {
        url: "/assets/images/logos/logo.png",
        width: 800,
        height: 600,
        alt: "Hush Lush Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
