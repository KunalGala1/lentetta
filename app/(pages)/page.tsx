'use client';

import { useState, useEffect } from 'react';
import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';

import Nav from '../components/Nav';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
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
        <section className='flex flex-col-reverse sm:flex-row gap-4 p-8'>
          <div className='sm:w-1/2 space-y-4'>
            <p>{profile.shortBio}</p>
            <Link
              href={'/about'}
              className='text-slate-950 bg-green-300 hover:bg-green-300/80 py-2 px-3 rounded shadow inline-block'
            >
              Read more
            </Link>
          </div>
          <Image
            src={profile.image.image}
            alt={profile.image.alt}
            width={500}
            height={500}
            unoptimized={true}
            className='sm:w-1/2 rounded shadow'
          ></Image>
        </section>
      )}
    </>
  );
};
export default HomePage;
