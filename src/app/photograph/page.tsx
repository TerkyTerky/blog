import { UnoptimizedImage } from '@/app/photograph/components/unoptimized-image'
import { BlurFade } from '@/components/magicui/blur-fade'
import Link from 'next/link'
import { images } from './config'

export default function PhotographPage() {
  return (
    <div className="min-h-screen py-8">
      {/* 页面标题 */}
      <BlurFade delay={0.1} direction="down">
        <div className="mb-12 text-center px-4">
          <h1 className="text-4xl font-bold mb-2">摄影作品</h1>
          <p className="text-muted-foreground">随手拍，随手删</p>
        </div>
      </BlurFade>

      {/* 图片网格 */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 px-4">
        {images.map(({ src, index, description }, idx) => (
          <BlurFade
            key={index}
            delay={0.1 + idx * 0.05}
            direction="up"
            inView={true}
          >
            <Link href={`/photograph/${index}`}>
              <div className="group break-inside-avoid cursor-pointer relative overflow-hidden rounded-lg bg-muted transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="relative overflow-hidden">
                  <UnoptimizedImage
                    src={src}
                    alt={description || `gallery-image-${index}`}
                  />
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>

      {/* 底部提示 */}
      <BlurFade delay={0.5} direction="up">
        <div className="mt-16 text-center text-muted-foreground text-sm px-4">
          <p>共 {images.length} 张作品</p>
        </div>
      </BlurFade>
    </div>
  )
}
