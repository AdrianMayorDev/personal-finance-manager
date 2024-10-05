/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: `
            @use './src/app/styles/base/_typography.scss';
            @use './src/app/styles/base/_palette.scss';
          `,
      },
};

export default nextConfig;
