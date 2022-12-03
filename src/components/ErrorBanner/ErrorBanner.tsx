import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

type ErrorBannerProps = {
  title?: string;
  description?: string;
};

const ErrorBanner = ({
  title = 'Uo oh! Something went wrong',
  description = 'Looks like something went wrong',
}: ErrorBannerProps) => {
  return (
    <Alert status="error" sx={{ flexWrap: 'wrap' }}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default ErrorBanner;
