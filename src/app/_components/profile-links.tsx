import Link from "next/link";

export default function ProfileLinks() {
  return (
    <div className="mt-4 flex flex-row gap-x-2 items-center justify-center">
      <Link
        href="https://www.linkedin.com/in/farhan-navas/"
        className="text-gray-400 hover:text-gray-500 flex items-center gap-x-2"
      >
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <Link
        href="https://github.com/farhan-navas"
        className="text-gray-400 hover:text-gray-500 flex items-center gap-x-2"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.93.68 1.88v2.8c0 .27.18.59.69.49C19.14 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <Link
        href="mailto:farhanmnavas@gmail.com"
        className="text-gray-400 hover:text-gray-500 flex items-center gap-x-2"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12.713l11.573-8.09c.269-.188.427-.497.427-.823C24 2.805 23.195 2 22.178 2H1.822C.805 2 0 2.805 0 3.8c0 .326.158.635.427.823L12 12.713z" />
          <path d="M23.573 6.328l-11.573 8.09-11.573-8.09C.158 6.515 0 6.824 0 7.15V20c0 1.105.805 2 1.822 2h20.356C23.195 22 24 21.105 24 20V7.15c0-.326-.158-.635-.427-.823z" />
        </svg>
      </Link>
      <Link
        href="tel:+6587421628"
        className="text-gray-400 hover:text-gray-500 flex items-center gap-x-2"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M6.6 10.8c1.2 2.4 3 4.5 5.4 5.7l2-2c.3-.3.7-.4 1.1-.2 1 .3 2 .5 3 .5.6 0 1 .4 1 1v3.6c0 .6-.4 1-1 1-9.6 0-17.4-7.8-17.4-17.4 0-.6.4-1 1-1H6c.6 0 1 .4 1 1 0 1 0 2 .3 3 .1.4 0 .8-.2 1.1l-2 2z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}
