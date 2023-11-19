import authOptions from '@/app/auth/authOptions';
import AssigneeSelect from '@/app/issues/[id]/AssigneeSelect';
import DeleteIssueButton from '@/app/issues/[id]/DeleteIssueButton';
import EditIssueButton from '@/app/issues/[id]/EditIssueButton';
import IssueDetails from '@/app/issues/[id]/IssueDetails';
import { Box, Flex, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import prisma from '../../../../prisma/client';

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) => {
  return prisma.issue.findUnique({
    where: { id: issueId },
  });
});

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await fetchUser(parseInt(params.id));

  if (!issue) {
    notFound();
  }

  await delay(100);

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title,
    description: 'Details of issue ' + issue?.id,
  };
}
