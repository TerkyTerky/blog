import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import FileTree from '../../components/file-tree'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <FileTree />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <div className="p-6 overflow-y-auto">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
