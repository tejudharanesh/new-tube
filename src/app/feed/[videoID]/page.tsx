interface PageProps {
  params: Promise<{
    videoID: string;
  }>;
}
const Page = async ({ params }: PageProps) => {
    const { videoID } = await params;
  return (
    <div>
      <h1>Page {videoID}</h1>
    </div>
  );
};

export default Page;
