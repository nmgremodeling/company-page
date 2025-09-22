import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "@/features/nav-bar";
import ToastProvider from "./ToastProvider";

const gilroyFont = localFont({
    src: [
        {
            path: "../../public/font/Gilroy-RegularItalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-MediumItalic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-SemiBoldItalic.ttf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-ThinItalic.ttf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-UltraLightItalic.ttf",
            weight: "200",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/font/Gilroy-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/font/Gilroy-Thin.ttf",
            weight: "100",
            style: "regular",
        },
        {
            path: "../../public/font/Gilroy-UltraLight.ttf",
            weight: "200",
            style: "regular",
        },
    ],
    variable: "--font-gilroy",
});

export const metadata: Metadata = {
    title: "NM&G Remodeling",
    description: "High-quality remodeling services in your area.",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
            { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
            {
                url: "/favicon-128x128.png",
                sizes: "128x128",
                type: "image/png",
            },
            {
                url: "/favicon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/favicon-256x256.png",
                sizes: "256x256",
                type: "image/png",
            },
            {
                url: "/favicon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            { url: "/favicon.ico", sizes: "any" }, // fallback for older browsers
        ],
        apple: "/favicon-192x192.png", // for iOS home screens
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${gilroyFont.variable} font-sans`}>
            <body>
                <Navbar />
                <ToastProvider />
                {children}
            </body>
        </html>
    );
}
