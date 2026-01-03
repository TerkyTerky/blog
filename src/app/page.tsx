import { BlurFade } from '@/components/magicui/blur-fade'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Camera, Github, Mail, MapPin, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const avatarStyle: React.CSSProperties = {
  borderRadius: '50%',
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
}

const personalInfo = {
  name: 'NoCoffee',
  bio: '好难猜啊真的好难猜啊',
  location: '📍 上海',
  email: 'terkyz@qq.com',
  github: 'https://github.com/TerkyTerky',
  description: '励志于成为保安',
}

const navigationCards = [
  {
    title: '摄影',
    description: '分享我的摄影记录',
    href: '/photograph',
    icon: Camera,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
  },
  {
    title: '吐槽',
    description: '分享随机言论和想法',
    href: '/bullshit',
    icon: MessageSquare,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <BlurFade delay={0.1} direction="down">
        <div className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden py-20">
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <div className="relative">
              <Image
                src="/avatar.jpg"
                width={120}
                height={120}
                alt="avatar"
                style={avatarStyle}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {personalInfo.name}
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                {personalInfo.bio}
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Navigation Cards */}
      <div className="container mx-auto max-w-6xl px-4 pb-12">
        <BlurFade delay={0.2} direction="up">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-2">探索内容</h2>
            <p className="text-muted-foreground">浏览我的摄影作品和随想</p>
          </div>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {navigationCards.map((card, index) => {
            const Icon = card.icon
            return (
              <BlurFade
                key={card.href}
                delay={0.3 + index * 0.1}
                direction="up"
              >
                <Link href={card.href}>
                  <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.bgColor} transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className={`h-6 w-6 ${card.color}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">
                            {card.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {card.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        查看详情
                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            )
          })}
        </div>

        {/* Personal Info Section */}
        <BlurFade delay={0.5} direction="up">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">关于我</CardTitle>
              <CardDescription>乱七八糟</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </div>
  )
}
