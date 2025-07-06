import { HeroAvatar, Section } from 'astro-boilerplate-components';

import SocialLinks from '@/data/SocialLinks';

import { GradientText } from './GradientText';
import SocialIcon from './SocialIcon';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Damiano</GradientText> 👋
        </>
      }
      description={
        <>
          a passionate <b>gameplay / AI programmer</b> and{' '}
          <b>technical game designer</b> dedicated to crafting immersive
          interactive experiences.
          <br />
          Proficient in <b>C#</b>, with expertise in <b>Unity</b>, <b>UE5</b>{' '}
          and <b>Godot</b>.
        </>
      }
      avatar={
        <img
          className="size-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <SocialIcon
            src="/assets/images/icons/fi-brands-linkedin.svg"
            alt="LinkedIn icon"
            href={SocialLinks.linkedin}
            color="#019CE8"
          />
          <SocialIcon
            src="/assets/images/icons/fi-brands-github.svg"
            alt="GitHub icon"
            href={SocialLinks.github}
            color="#9132AD"
          />
          <SocialIcon
            src="/assets/images/icons/itchio-logo-textless-black.png"
            alt="itch.io icon"
            href={SocialLinks.itch}
            color="#fa5c5c"
          />
        </>
      }
    />
  </Section>
);

export { Hero };
