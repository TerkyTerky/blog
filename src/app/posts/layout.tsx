import FileTree from '../../components/global-component/file-tree'
import { FILE_TREE_LIST } from './const'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <FileTree fileTreeList={FILE_TREE_LIST} />
      <div className="p-6 overflow-y-auto">{children}</div>
    </div>
  )
}
