import Link from "next/link";

const Header = () => {
  return (
    <h2 className="mb-20 mt-8 flex items-center text-xl font-light leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl">
      <Link
        href="/"
        className="transition-colors duration-500 hover:underline"
      >
        Blog
      </Link>
      .
    </h2>
  );
};

export default Header;
