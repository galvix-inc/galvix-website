import fs from 'fs/promises';
import path from 'path';
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'fs';

// Font and logo paths
// const fontData = readFileSync('./public/fonts/Inter-Bold.ttf');
const fontData = readFileSync('./public/fonts/Inter-Bold.ttf');
const logoBuffer = await fs.readFile('./public/images/galvix-logo.png'); // Must be PNG
const currentYear = new Date().getFullYear();
const width = 1200;
const height = 630;


export async function generateNexusImageForState(slug,name) {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          backgroundColor: '#f9fafb',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
          fontFamily: 'Inter',
          position: 'relative',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: 60,
                fontWeight: 600,
                color: '#655bef',
                marginBottom: 20,
              },
              children: 'Sales Tax Nexus Guide for',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 88,
                fontWeight: 800,
                color: '#1f2937',
              },
              children: name,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 34,
                marginTop: 40,
                color: '#4b5563',
              },
              children: `Updated for ${currentYear}`,
            },
          },
          {
            type: 'img',
            props: {
              src: 'data:image/png;base64,' + logoBuffer.toString('base64'),
              width: 200,
              height: 59,
              style: {
                position: 'absolute',
                bottom: 40,
                right: 50,
              },
            },
          },
        ],
      },
    },
    {
      width,
      height,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  const outputDir = './public/images/nexus';
  await fs.mkdir(outputDir, { recursive: true });
  const outPath = path.join(outputDir, `${slug}.png`);
  const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
  await fs.writeFile(outPath, buffer);
  // console.log(`✅ Image generated for ${name}`);
}


