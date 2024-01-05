'use client';
import { useState, useEffect } from 'react';
import { getWorks } from '@/sanity/sanity.query';
import type { WorksType } from '@/types';
import { PortableText } from '@portabletext/react';

import WorkCard from '@/app/components/WorkCard';

const WorksPage = () => {
  const [works, setWorks] = useState<WorksType[]>([]);
  const [worksByCategory, setWorksByCategory] = useState<{
    [key: string]: WorksType[];
  }>({});

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      const works = await getWorks();
      const worksByCategory = groupByCategory(works);
      setWorks(works);
      setWorksByCategory(worksByCategory);
      console.log(worksByCategory);
    } catch (error) {
      console.error('Failed to fetch works', error);
      // Handle error appropriately
    }
  };

  const groupByCategory = (
    works: WorksType[]
  ): { [key: string]: WorksType[] } => {
    return works.reduce(
      (groupedWorks: { [key: string]: WorksType[] }, work) => {
        const category = work.category || 'Uncategorized'; // Handle works without a category
        if (!groupedWorks[category]) {
          groupedWorks[category] = [];
        }
        groupedWorks[category].push(work);
        return groupedWorks;
      },
      {}
    );
  };

  return (
    <>
      <main className='p-8 max-w-[750px] mx-auto space-y-8'>
        {Object.entries(worksByCategory).map(([category, worksInCategory]) => (
          <section key={category} className='space-y-4'>
            <h2 className='font-bold text-2xl'>{category}</h2>
            {worksInCategory.map((work) => (
              <WorkCard
                key={work._id}
                title={work.title}
                year={work.year}
                subtitle={work.subtitle}
                description={work.description}
                createLinkedPage={work.createLinkedPage}
                slug={work.slug}
              />
            ))}
          </section>
        ))}
      </main>
    </>
  );
};

export default WorksPage;
