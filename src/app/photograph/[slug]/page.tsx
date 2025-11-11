import { UnoptimizedImage } from '@/components/global-component/unoptimized-image';
import { images } from '../config';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ChevronsLeft } from 'lucide-react';

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const imageIndex = parseInt(slug, 10);
  const image = images[imageIndex];

  if (isNaN(imageIndex) || !image) {
    return <div className="text-center p-10">Image not found</div>;
  }

  const prevIndex = imageIndex > 0 ? imageIndex - 1 : images.length - 1;
  const nextIndex = imageIndex < images.length - 1 ? imageIndex + 1 : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      <Link
        href="/photograph"
        className="absolute top-5 left-5 text-white z-50 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all flex items-center gap-2"
      >
        <ChevronsLeft size={24} />
        返回
      </Link>

      <Link
        href={`/photograph/${prevIndex}`}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50 p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
      >
        <ChevronLeft size={48} />
      </Link>

      <div className="w-auto h-auto max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <UnoptimizedImage
          src={image.src}
          alt={`photo-${image.index}`}
          sizing="single-view"
        />
      </div>

      <Link
        href={`/photograph/${nextIndex}`}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50 p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
      >
        <ChevronRight size={48} />
      </Link>
    </div>
  );
}
