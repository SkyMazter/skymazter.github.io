interface Props extends React.PropsWithChildren {
  title: string;
}

const TableView = ({ title, children }: Props) => {
  return (
    <>
      <header>
        <h2 style={{textDecoration: "underline"}}>{title}</h2>
      </header>
      <div className="table-view">{children}</div>
    </>
  );
};

export default TableView;
