'use client';
import { useState, useEffect } from 'react';
import { getWorkBySlug } from '@/sanity/sanity.query';
import type { WorkType } from '@/types';
import { PortableText } from '@portabletext/react';

import Link from 'next/link';

const WorkBySlugPage = ({ params }: { params: { slug: string } }) => {
  const [work, setWork] = useState<WorkType | null>(null);

  useEffect(() => {
    fetchWork();
  }, []);

  const fetchWork = async () => {
    try {
      const work = await getWorkBySlug(params.slug);
      setWork(work);
    } catch (error) {
      console.error('Failed to fetch work', error);
      // Handle error appropriately
    }
  };

  return (
    <>
      {work && (
        <main className='p-4 max-w-[750px] mx-auto space-y-4'>
          <div className='py-16'>
            <h1 className='text-4xl'>
              <span className='font-semibold italic'>{work.title}</span> (
              {work.year})
            </h1>
            <p>{work.subtitle}</p>
            <p className='text-gray-500'>{work.description}</p>
          </div>
          <div>
            {work.duration && <p>Duration: {work.duration}</p>}
            {work.commissionInfo && <p>{work.commissionInfo}</p>}
            {work.performanceInfo && <p>{work.performanceInfo}</p>}
          </div>
          <div>
            <PortableText value={work.programNote}></PortableText>
          </div>
          <div>
            <PortableText value={work.additionalInfo}></PortableText>
          </div>
          <div>
            <Link
              href={'/works'}
              className='text-slate-950 inline-block bg-green-300 hover:bg-green-300/80 py-2 px-3 rounded shadow'
            >
              Back to works
            </Link>
          </div>
        </main>
      )}
    </>
  );
};
export default WorkBySlugPage;
