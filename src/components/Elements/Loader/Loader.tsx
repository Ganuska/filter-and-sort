import clsx from 'clsx';

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24'
};

interface LoaderProps {
  size?: keyof typeof sizes;
  className?: string;
  color?: 'default' | 'neutral';
}

export const Loader = ({
  size = 'md',
  className = '',
  color = 'default'
}: LoaderProps): React.ReactElement | null => {
  return (
    <>
      <svg
        className={clsx('animate-spin', sizes[size], className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        data-testid="loading"
      >
        <circle
          className={color === 'default' ? 'opacity-10' : 'opacity-30'}
          cx="12"
          cy="12"
          r="10"
          stroke={color === 'default' ? 'aqua' : 'white'}
          strokeWidth="4"
        />
        <path
          className={color === 'default' ? 'opacity-100' : 'opacity-75'}
          fill={color === 'default' ? 'teal' : 'white'}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">Loading</span>
    </>
  );
};
