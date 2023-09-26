import FacebookIcon from '@/assets/svg/FacebookIcon'
import InstagramIcon from '@/assets/svg/InstagramIcon'
import TiktokIcon from '@/assets/svg/TiktokIcon'
import WhatsappIcon from '@/assets/svg/WhatsappIcon'

const Items = [
  {
    id: 1,
    link: 'https://wa.me/5493512012426',
    icon: <WhatsappIcon />,
  },
  {
    id: 2,
    link: 'https://www.tiktok.com/@solaz.club',
    icon: <TiktokIcon />,
  },
  {
    id: 3,
    link: 'https://www.facebook.com/solazclubmendiolaza/?locale=es_LA',
    icon: <FacebookIcon />,
  },
  {
    id: 4,
    link: 'https://www.instagram.com/solaz.club/?igshid=NGExMmI2YTkyZg',
    icon: <InstagramIcon />,
  },
]

interface PropsIteamRedes {
  minimized?: 'nav' | 'footerMobile' | 'footer'
  exclude?: number
}

function SocialMedia({ minimized, exclude }: PropsIteamRedes) {
  return (
    <ul
      className={`flex flex-row justify-between ${
        minimized === 'footer'
          ? 'w-3/4 gap-0 p-2 md:w-fit md:gap-5 md:p-0'
          : minimized === 'nav'
          ? 'w-full justify-between'
          : 'w-3/4'
      }`}
    >
      {Items.map((item) => {
        if (item.id === exclude) {
          return null
        }

        return (
          <li
            key={item.id}
            className={`rounded-full bg-white p-1 md:transition-transform md:hover:scale-125 ${
              minimized === 'footer'
                ? 'h-8 w-8'
                : minimized === 'nav'
                ? 'h-7 w-7'
                : 'h-10 w-10 md:h-12 md:w-12'
            }`}
          >
            <a href={item.link} rel="noopener" target="_blank">
              {item.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialMedia
