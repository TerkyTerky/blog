export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-sm] border-t py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-gray-500 text-sm mb-2 md:mb-0">
          © {new Date().getFullYear()}{' '}
          <span className="font-bold text-black">Wuli Blog</span>. All rights
          reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/wulikunkun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 inline-block"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
          <a
            href="mailto:wulikunkun@example.com"
            className="text-gray-400 hover:text-black transition-colors"
            aria-label="Email"
          >
            <svg
              className="w-5 h-5 inline-block"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 4.99A2 2 0 0 1 4 3h16a2 2 0 0 1 2 1.99v14.02A2 2 0 0 1 20 21H4a2 2 0 0 1-1.99-2V4.99zm2.2.01l7.79 6.99 7.79-6.99H4.21zm15.79 2.13l-7.07 6.35a1 1 0 0 1-1.34 0L4 7.13V19h16V7.13z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
