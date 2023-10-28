import localFont from "next/font/local";

const estre = localFont({ src: "./estre.ttf" });
const notoSans = localFont({ src: "./noto-sans.ttf" });

export const fonts = {
  estrangeloEdessa: estre,
  notoSans: notoSans,
};
