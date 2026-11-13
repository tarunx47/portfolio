import profileImg from '../../assets/profile.png';
import { SOCIAL_LINKS } from '../../constants';

export const ProfileCard = () => {
  const cardSocials = SOCIAL_LINKS.filter((link) => ['github', 'linkedin', 'email'].includes(link.id));

  return (
    <div className="flex w-56 flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-card-foreground sm:w-64">
      <img src={profileImg} alt="Tarun Dayma" className="mb-4 h-32 w-32 rounded-full border border-border object-cover" />
      <div className="text-center text-lg font-semibold">
        TARUN DAYMA
        <span className="mt-1 block text-sm font-normal text-muted-foreground">BCA Student &amp; Developer</span>
      </div>
      <div className="mt-5 flex justify-center gap-4">
        {cardSocials.map((social) => (
          <a
            key={social.id}
            href={social.navigateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={social.title}
          >
            <social.icon size={20} strokeWidth={1.5} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
};
