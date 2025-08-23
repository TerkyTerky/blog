import FileTree from './file-tree';
import Comment from './comment';
import { FILE_TREE_LIST } from './const';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex mx-10">
      <FileTree fileTreeList={FILE_TREE_LIST} />
      <div className="p-6 overflow-y-auto">{children}</div>
      <Comment />
    </div>
  );
}
