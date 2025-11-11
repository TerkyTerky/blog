import { UnoptimizedImage } from '@/components/global-component/unoptimized-image';
import { images } from './config';
import Link from 'next/link';

export default function PhotographPage() {
  return (
    <div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
        {images.map(({ src, index }) => (
          <Link key={index} href={`/photograph/${index}`}>
            <div className="break-inside-avoid cursor-pointer">
              <UnoptimizedImage src={src} alt={`gallery-image-${index}`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
