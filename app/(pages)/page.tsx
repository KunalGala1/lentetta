'use client';

import { useState, useEffect } from 'react';
import { getProfile } from '@/sanity/sanity.query';
import type { ProfileType } from '@/types';

import React from 'react';
import ReactPlayer from 'react-player';

import Nav from '../components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

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
        <section className='flex flex-col-reverse md:flex-row gap-8 p-8 justify-center items-center max-w-[1000px] mx-auto'>
          <div className='md:w-1/2 space-y-8'>
            {/* Recording */}
            <div className='space-y-4'>
              <div>
                <h2 className='font-bold text-xl capitalize'>
                  {profile.featuredRecording.title}
                </h2>
                <p className='text-gray-950/50'>
                  {profile.featuredRecording.subtitle}
                </p>
              </div>
              <div>
                <ReactPlayer
                  url='https://soundcloud.com/len-tetta/clockwork-fog'
                  width={'100%'}
                  height={300}
                />
              </div>
              <Link
                href={'/music'}
                className='text-slate-950 bg-green-200 hover:bg-green-200/80 py-2 px-3 rounded shadow inline-block'
              >
                Listen
              </Link>
            </div>
            <p>{profile.shortBio}</p>
            <Link
              href={'/about'}
              className='text-slate-950 bg-green-200 hover:bg-green-200/80 py-2 px-3 rounded shadow inline-block'
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
            className='md:w-1/2 rounded shadow object-cover object-center'
          ></Image>
        </section>
      )}
    </>
  );
};
export default HomePage;
