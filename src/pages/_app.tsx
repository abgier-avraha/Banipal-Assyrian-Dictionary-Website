import { type AppType } from "next/app";
import Script from "next/script";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: "syriac";
          src: url("/fonts/estre.ttf") format("truetype");
          font-style: normal;
          unicode-range: U+0700-074F;
          size-adjust: 160%;
        }
        
        @font-face {
          font-family: "arabic";
          src: url("/fonts/noto-sans.ttf") format("truetype");
          font-style: normal;
          unicode-range: U+0600-06FF;
          size-adjust: 130%;
        }
        
        html {
          font-family: syriac, arabic, "Segoe UI", "Arial";
        }
        input::placeholder {
          font-size: 0.8em;
        }
      `}
      </style>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1E0SCBB8X1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1E0SCBB8X1');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
};

export default api.withTRPC(MyApp);
