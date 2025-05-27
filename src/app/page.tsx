import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { Icons } from '@/constants/icons'
import Image from 'next/image'

const avatarStyle: React.CSSProperties = {
  borderRadius: '50%',
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
}

export default function Home() {
  return (
    <div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40}>
          <Icons.gitHub />
          <Icons.redNote />
          <Icons.byteDance />
        </OrbitingCircles>
        <div>
          <Image
            src="https://kunkun-img.oss-cn-shanghai.aliyuncs.com/avatar.jpg"
            width={100}
            height={100}
            alt="avatar"
            style={avatarStyle}
          />
        </div>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <Icons.react />
          <Icons.node />
          <Icons.vue />
        </OrbitingCircles>
      </div>
    </div>
  )
}
