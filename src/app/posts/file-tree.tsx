import { fileTreeList } from '@/constants/file-tree'

export default function FileTree() {
  return fileTreeList.map((node) => {
    return (
      <div key={node.slug}>
        <div className="text-gray-500">{node.title}</div>
      </div>
    )
  })
}
