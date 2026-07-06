import type { Metadata } from "next";
import { siteConfig } from "./site";

export const metadata: Metadata = {
  title: siteConfig.title,

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [{ name: siteConfig.author }],
};