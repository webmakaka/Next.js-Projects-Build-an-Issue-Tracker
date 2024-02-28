import EditIssueButton from '@/app/issues/[id]/EditIssueButton';
import { Box, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import prisma from '../../../../prisma/client';
import IssueDetails from '@/app/issues/[id]/IssueDetails';

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
    <Grid columns={{ initial: '1', md: '2' }} gap="5">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
