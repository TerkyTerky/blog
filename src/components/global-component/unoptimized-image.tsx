import Image from 'next/image';
import path from 'path';
import { imageSizeFromFile } from 'image-size/fromFile';

const getImageDimension = async (src: string) => {
  const fullPath = path.join(process.cwd(), 'public', src);
  const { width, height } = await imageSizeFromFile(fullPath);
  return { width, height };
};

export async function UnoptimizedImage({
  src,
  alt,
  sizing = 'gallery',
}: {
  src: string;
  alt: string;
  sizing?: 'gallery' | 'single-view';
}) {
  const { width, height } = await getImageDimension(src);

  if (sizing === 'single-view') {
    const aspectRatio = width! / height!;
    const wrapperClassName = aspectRatio > 1 ? 'w-[80vw]' : 'h-[80vh]';

    return (
      <div
        className={`relative ${wrapperClassName}`}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <Image
          src={src}
          alt={alt}
          quality={100}
          unoptimized={true}
          fill
          className="object-contain"
        />
      </div>
    );
  }

  const aspectRatio = width! / height!;
  let finalWidth = 600;
  let finalHeight = 400;

  if (aspectRatio < 1) {
    finalWidth = 400;
    finalHeight = 600;
  }

  return (
    <Image
      width={finalWidth}
      height={finalHeight}
      src={src}
      alt={alt}
      quality={100}
      unoptimized={true}
    />
  );
}
