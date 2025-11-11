import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      <Loader2 className="h-16 w-16 text-white animate-spin" />
    </div>
  );
}