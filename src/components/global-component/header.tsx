import { Ampersand } from 'lucide-react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'

const docList = [
  {
    title: '技术向',
    href: '/posts',
    description: '分享技术文章',
  },
  {
    title: '吐槽',
    href: '/bullshit',
    description: '分享随机言论',
  },
  {
    title: '探索',
    href: '/treasure',
    description: '分享宝藏',
  },
]

export function Header() {
  return (
    <div className="flex items-center justify-between py-4 px-10">
      <Link className="flex items-center space-x-2" href="/">
        <Ampersand size={32} color="#3c66c8" />
        <span className="font-bold text-xl">NoCoffee</span>
      </Link>
      {/* 右侧导航菜单 */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[60px] gap-2 md:w-[70px] lg:w-[100px]">
                {docList.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
