import { Box, Card, Flex } from '@radix-ui/themes';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <div>
        <Skeleton />
        <Flex className="space-x-3" my="2">
          <Skeleton width="5rem" />
          <Skeleton width="8rem" />
        </Flex>
        <Card className="prose" mt="4">
          <Skeleton count={3} />
        </Card>
      </div>
    </Box>
  );
};

export default LoadingIssueDetailPage;
