const repository = process.env.GITHUB_REPOSITORY ?? '';
const [_owner, repositoryName = ''] = repository.split('/');
const isUserOrOrgSite = repositoryName.endsWith('.github.io');
const basePath = repositoryName && !isUserOrOrgSite ? `/${repositoryName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
