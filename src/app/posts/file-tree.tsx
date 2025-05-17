import { fileTreeList } from '@/constants/file-tree'

export default function FileTree() {
  return fileTreeList.map((node) => {
    return (
      <div key={node.slug}>
        <span>{node.title}</span>
      </div>
    )
  })
}
