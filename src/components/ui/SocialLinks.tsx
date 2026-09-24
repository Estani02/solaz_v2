import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import TiktokIcon from '@/assets/svg/TiktokIcon'
import { SITE } from '@/config/site'

const LINKS = [
  { label: 'WhatsApp', href: SITE.whatsapp, icon: <WhatsAppIcon fontSize="small" /> },
  { label: 'Instagram', href: SITE.instagram, icon: <InstagramIcon fontSize="small" /> },
  { label: 'Facebook', href: SITE.facebook, icon: <FacebookIcon fontSize="small" /> },
  {
    label: 'TikTok',
    href: SITE.tiktok,
    icon: <TiktokIcon className="h-4 w-4" fill="currentColor" />,
  },
]

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {LINKS.map((link) => (
        <li key={link.label}>
          <a
            aria-label={link.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-solaz hover:bg-solaz hover:text-white"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
