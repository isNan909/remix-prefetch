const Layout = ({ children }: any) => {
  return (
    <>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>Rick and Morty</h1>
        <br />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
