import Link from 'next/link';

type WorkCardProps = {
  title: string;
  year: string;
  subtitle: string;
  description: string;
  createLinkedPage: boolean;
  slug: string;
};

const WorkCard = ({
  title,
  year,
  subtitle,
  description,
  createLinkedPage,
  slug,
}: WorkCardProps) => {
  return (
    <div>
      <h3>
        <span className='font-semibold italic'>
          {createLinkedPage ? (
            <Link
              href={'/works/' + slug}
              className='hover:text-red-950 underline'
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </span>{' '}
        ({year})
      </h3>
      <p>{subtitle}</p>
      <p className='text-gray-500'>{description}</p>
    </div>
  );
};
export default WorkCard;
