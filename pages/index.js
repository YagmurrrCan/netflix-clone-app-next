import Header from '@/components/header';

const Home = ({ categories }) => {
  return (
    <div>
      <Header Router={Router} categories={categories} />
      <h1>Welcome to my Next.js App!</h1>
    </div>
  );
};

export default Home;
