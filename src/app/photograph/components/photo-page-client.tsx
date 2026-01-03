'use client'

import { ChevronLeft, ChevronRight, ChevronsLeft, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface PhotoPageClientProps {
  imageIndex: number
  totalImages: number
  imageDescription?: string
  prevIndex: number
  nextIndex: number
  children: React.ReactNode
}

export function PhotoPageClient({
  imageIndex,
  totalImages,
  imageDescription,
  prevIndex,
  nextIndex,
  children,
}: PhotoPageClientProps) {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push('/photograph')
      } else if (e.key === 'ArrowLeft') {
        router.push(`/photograph/${prevIndex}`)
      } else if (e.key === 'ArrowRight') {
        router.push(`/photograph/${nextIndex}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // 防止背景滚动
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [prevIndex, nextIndex, router])

  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 backdrop-blur-sm">
      {/* 返回按钮 */}
      <Link
        href="/photograph"
        className="absolute top-5 left-5 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
      >
        <ChevronsLeft size={20} />
        <span className="text-sm">返回</span>
      </Link>

      {/* 关闭按钮 */}
      <Link
        href="/photograph"
        className="absolute top-5 right-5 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
        aria-label="关闭"
      >
        <X size={20} />
      </Link>

      {/* 图片索引 */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-50 text-white bg-black/50 rounded-full px-4 py-2 text-sm backdrop-blur-sm">
        {imageIndex + 1} / {totalImages}
      </div>

      {/* 上一张按钮 */}
      <Link
        href={`/photograph/${prevIndex}`}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 backdrop-blur-sm group"
        aria-label="上一张"
      >
        <ChevronLeft
          size={32}
          className="group-hover:translate-x-[-2px] transition-transform"
        />
      </Link>

      {/* 图片容器 - 使用 children 渲染服务器组件渲染的图片 */}
      <div className="w-auto h-auto max-w-[90vw] max-h-[90vh] flex items-center justify-center px-20">
        {children}
      </div>

      {/* 下一张按钮 */}
      <Link
        href={`/photograph/${nextIndex}`}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-200 backdrop-blur-sm group"
        aria-label="下一张"
      >
        <ChevronRight
          size={32}
          className="group-hover:translate-x-[2px] transition-transform"
        />
      </Link>

      {/* 图片描述 */}
      {imageDescription && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 text-white bg-black/50 rounded-lg px-4 py-2 text-sm max-w-md text-center backdrop-blur-sm">
          {imageDescription}
        </div>
      )}

      {/* 键盘提示 */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 text-white/60 text-xs bg-black/30 rounded-full px-4 py-2 backdrop-blur-sm">
        <kbd className="px-2 py-1 bg-black/50 rounded text-xs">←</kbd>
        {' / '}
        <kbd className="px-2 py-1 bg-black/50 rounded text-xs">→</kbd>
        {' 切换 '}
        <kbd className="px-2 py-1 bg-black/50 rounded text-xs">ESC</kbd>
        {' 退出'}
      </div>
    </div>
  )
}

