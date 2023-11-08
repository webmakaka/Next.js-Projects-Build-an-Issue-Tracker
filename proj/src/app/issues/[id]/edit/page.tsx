import IssueForm from '@/app/issues/_components/IssueForm';
import { notFound } from 'next/navigation';
import prisma from '../../../../../prisma/client';

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    notFound();
  }

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
