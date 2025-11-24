import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "@/Redux/Provider/StoreProvider";
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RJLand",
  url: "https://rjland.ir",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://rjland.ir/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
export const metadata = {
  metadataBase: new URL("https://rjland.ir"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "RJLand | فروشگاه اینترنتی آر جی لند",
  description:
    "خرید اینترنتی گوشی موبایل، لوازم جانبی، هندزفری، ساعت هوشمند و جدیدترین کالاهای دیجیتال با بهترین قیمت در RJLand. ارسال سریع، تضمین اصالت کالا.",

  alternates: {
    canonical: "https://rjland.ir",
  },

  openGraph: {
    title: "RJLand | فروشگاه اینترنتی آر جی لند",
    description:
      "فروشگاه آنلاین کالاهای دیجیتال با قیمت مناسب. خرید گوشی، لوازم جانبی موبایل، هندزفری، ساعت هوشمند و ...",
    url: "https://rjland.ir",
    siteName: "RJLand",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://rjland.ir/og-image.png",
        width: 1200,
        height: 630,
        alt: "RJLand OpenGraph Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RJLand | فروشگاه اینترنتی آر جی لند",
    description:
      "خرید انواع محصولات دیجیتال با بهترین قیمت. ارسال سریع و تضمین اصالت در RJLand.",
    images: ["/logo/rjLogo.png"],
  },
};

export const revalidate = 2628000;

const yekan = localFont({ src: "../../public/fonts/yekan-bakh-regular.ttf" });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RJLand",
 "url": "https://rjland.ir",
  "logo": "https://rjland.ir/logo-search.png",
  "image": "https://rjland.ir/logo-search.png"
}
`}
        </script>

        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="فروشگاه RJLand, خرید RJLand, فروشگاه آر جی لند, rjland shop"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="author" content="Reza Khodadady" />
        <meta
          name="google-site-verification"
          content="8precbvVdmSOKBqTTr9AJy71VQOcxX4Opr5wJxgUG2c"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-search.png" />
      </head>
      <body className={` ${geistMono.variable} ${yekan.className}`}>
        <noscript>
          برای مشاهده بهترین تجربه، لطفاً JavaScript را فعال کنید.
        </noscript>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
