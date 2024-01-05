'use client';

import { useState, useEffect } from 'react';
import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';
import { PortableText } from '@portabletext/react';

import Image from 'next/image';

const AboutPage = () => {
  const [profile, setProfile] = useState<ProfileType>();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const profile = await getProfile();
    setProfile(profile);
  };

  return (
    <>
      {profile && (
        <main className='p-8 space-y-8'>
          <div className='p-4 max-w-[750px] mx-auto space-y-4'>
            <PortableText value={profile.fullBio}></PortableText>
          </div>
          <div>
            <Image
              src={profile.image.image}
              alt={profile.image.alt}
              width={500}
              height={500}
              unoptimized={true}
              className='mx-auto rounded shadow'
            ></Image>
          </div>
        </main>
      )}
    </>
  );
};
export default AboutPage;
