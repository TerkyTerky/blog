import FileTree from './file-tree'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen">
      {/* 左侧文件树 */}
      <FileTree />
      {/* 右侧内容区域 */}
      <div className="flex-1 p-6 overflow-y-auto">{children}</div>
    </div>
  )
}
