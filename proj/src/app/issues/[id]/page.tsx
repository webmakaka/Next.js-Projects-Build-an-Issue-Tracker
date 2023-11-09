import DeleteIssueButton from '@/app/issues/[id]/DeleteIssueButton';
import EditIssueButton from '@/app/issues/[id]/EditIssueButton';
import IssueDetails from '@/app/issues/[id]/IssueDetails';
import { Box, Flex, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import prisma from '../../../../prisma/client';

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    notFound();
  }

  await delay(1000);

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
