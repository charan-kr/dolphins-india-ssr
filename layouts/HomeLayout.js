import Meta from "components/Meta";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
