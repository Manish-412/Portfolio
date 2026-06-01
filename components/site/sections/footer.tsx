import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-foreground">
          {siteConfig.name}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {siteConfig.socials.map((social) => (
            <a key={social.label} href={social.href} className="hover:text-foreground">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
