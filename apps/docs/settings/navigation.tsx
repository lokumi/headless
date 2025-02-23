import { UIPageRoutes, CLIPageRoutes } from "@/lib/pageroutes";

export const Navigations = [
  {
    title: "Home",
    href: "https://www.umidigital.co.uk/",
    external: true,
  },
  {
    title: "CLI",
    href: `/cli${CLIPageRoutes[0].href}`,
  },
  {
    title: "UI",
    href: `/ui${UIPageRoutes[0].href}`,
  },
  {
    title: "Flow",
    href: `/flow${UIPageRoutes[0].href}`,
  },
];

export const GitHubLink = {
  href: "https://github.com/umi-labs/umi",
};
