import localFont from 'next/font/local'

export const fontMono = localFont({
  variable: '--jetbrains-mono-font',
  src: [
    { path: '../assets/fonts/jetbrains-mono-100-normal.woff2', weight: '100', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono-200-normal.woff2', weight: '200', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono-300-normal.woff2', weight: '300', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono-700-normal.woff2', weight: '700', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono-800-normal.woff2', weight: '800', style: 'normal' },
    { path: '../assets/fonts/jetbrains-mono-100-italic.woff2', weight: '100', style: 'italic' },
    { path: '../assets/fonts/jetbrains-mono-200-italic.woff2', weight: '200', style: 'italic' },
    { path: '../assets/fonts/jetbrains-mono-300-italic.woff2', weight: '300', style: 'italic' },
    { path: '../assets/fonts/jetbrains-mono-400-italic.woff2', weight: '400', style: 'italic' },
    { path: '../assets/fonts/jetbrains-mono-500-italic.woff2', weight: '500', style: 'italic' },
    { path: '../assets/fonts/jetbrains-mono-600-italic.woff2', weight: '600', style: 'italic' },
    { path: '../assets/fonts/jetbrains-mono-700-italic.woff2', weight: '700', style: 'italic' },
    { path: '../assets/fonts/jetbrains-mono-800-italic.woff2', weight: '800', style: 'italic' },
  ],
})
