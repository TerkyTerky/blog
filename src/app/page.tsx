import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { Icons } from '@/constants/icons'

export default function Home() {
  return (
    <div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40}>
          <Icons.whatsapp />
          <Icons.notion />
          <Icons.openai />
          <Icons.googleDrive />
          <Icons.whatsapp />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <Icons.whatsapp />
          <Icons.notion />
          <Icons.openai />
          <Icons.googleDrive />
        </OrbitingCircles>
      </div>
    </div>
  )
}
