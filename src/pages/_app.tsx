import { type AppType } from "next/app";
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
      `}
      </style>
      <Component {...pageProps} />
    </>
  )
};

export default api.withTRPC(MyApp);
