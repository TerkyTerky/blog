import { UnoptimizedImage } from '@/app/photograph/components/unoptimized-image'
import { images } from '../config'
import { PhotoPageClient } from '../components/photo-page-client'

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const imageIndex = parseInt(slug, 10)
  const image = images[imageIndex]

  if (isNaN(imageIndex) || !image) {
    return (
      <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
        <div className="text-center text-white">
          <p className="text-xl mb-4">图片未找到</p>
          <a
            href="/photograph"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            返回相册
          </a>
        </div>
      </div>
    )
  }

  const prevIndex = imageIndex > 0 ? imageIndex - 1 : images.length - 1
  const nextIndex = imageIndex < images.length - 1 ? imageIndex + 1 : 0

  return (
    <PhotoPageClient
      imageIndex={imageIndex}
      totalImages={images.length}
      imageDescription={image.description}
      prevIndex={prevIndex}
      nextIndex={nextIndex}
    >
      <div className="relative w-full h-full">
        <UnoptimizedImage
          src={image.src}
          alt={image.description || `photo-${image.index}`}
          sizing="single-view"
        />
      </div>
    </PhotoPageClient>
  )
}
