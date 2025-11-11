import { postFileTreeList } from '@/constants/file-tree-list';
import Comment from './comment';
import FileTree from '../../components/global-component/file-tree';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex mx-10">
      <FileTree prefix="/posts" fileTreeList={postFileTreeList} />
      <div className="p-6 overflow-y-auto">{children}</div>
      <Comment />
    </div>
  );
}
