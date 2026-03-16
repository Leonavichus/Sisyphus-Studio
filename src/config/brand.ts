interface BrandConfig {
  prefix: string;
  suffix: string;
  short: string;
  foundedYear: number;
  teamSize: number;
}

export const BRAND = {
  prefix: "Sisyphus",
  suffix: "Studio",
  short: "SS",
  foundedYear: 2025,
  teamSize: 4,
} satisfies BrandConfig;
