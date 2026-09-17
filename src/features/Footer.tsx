import Link from "next/link";

const buttonClassName =
  "flex items-center gap-2 bg-slate-300 font-bold tracking-wide text-sm rounded-lg p-2 px-3 text-slate-950";

const links = [
  {
    href: "mailto:ericnguyen91113@gmail.com",
    icon: (
      <svg
        aria-hidden="true"
        fill="currentColor"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/ketanrajpal/",
    icon: (
      <svg
        height="24"
        viewBox="0 0 32 32"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
          fillRule="evenodd"
        ></path>
      </svg>
    ),
    label: "LinkedIn",
  },
  {
    href: "https://drive.google.com/file/d/13PYRtesId0ELT_pgzVqQBXxoToWzCezk/view",
    icon: (
      <svg
        aria-hidden="true"
        fill="currentColor"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2zm0-4h5v2H8V7z" />
      </svg>
    ),
    label: "Resume",
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 py-8 md:gap-12 md:py-12 bg-slate-950">
      <div className="flex gap-3 md:gap-6 flex-wrap justify-center">
        {links.map((link) => (
          <Link
            className={buttonClassName}
            href={link.href}
            key={link.label}
            {...(link.href.startsWith("http")
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 text-base font-bold tracking-wide items-center text-slate-300">
        <span>Made with</span>
        <span className="text-rose-500">
          <svg
            fill="none"
            height="30"
            transform="rotate(0 0 0)"
            viewBox="0 0 24 24"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8227 4.77222C9.5756 2.52515 5.93237 2.52515 3.6853 4.77222C1.43823 7.01929 1.43823 10.6625 3.6853 12.9096L10.409 19.6334C11.2877 20.5121 12.7123 20.5121 13.591 19.6334L20.3147 12.9097C22.5618 10.6626 22.5618 7.01939 20.3147 4.77232C18.0676 2.52525 14.4244 2.52525 12.1773 4.77232L12 4.94959L11.8227 4.77222Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span>by Eric Nguyen</span>
      </div>
    </footer>
  );
};
