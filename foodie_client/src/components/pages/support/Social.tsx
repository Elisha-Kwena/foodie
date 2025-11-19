import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebook, 
  faYoutube, 
  faTwitter, 
  faTiktok 
} from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  {
    name: 'Facebook',
    icon: faFacebook, // Use the imported icon directly
    url: '#',
    color: 'text-blue-600 hover:text-blue-700'
  },
  {
    name: 'YouTube',
    icon: faYoutube,
    url: '#',
    color: 'text-red-600 hover:text-red-700'
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    url: '#',
    color: 'text-blue-400 hover:text-blue-500'
  },
  {
    name: 'TikTok',
    icon: faTiktok,
    url: '#',
    color: 'text-black hover:text-gray-700'
  }
]

export default function SocialLinks(){
    return(
        <>
            <div className="w-full h-full flex flex-row md:flex-col gap-10 items-center justify-center">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        className={`${social.color} transition-colors duration-300`}
                        aria-label={social.name}
                    >
                        <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                    </a>
                ))}
            </div>
        </>
    )
}