interface Props {
  label: string;
  image?: string;
}

const TableBox = ({ label, image }: Props) => {
  return (
    <section className="table-box">
      {image ? <img src={image} /> : null}
      <p>{label}</p>
    </section>
  );
};

export default TableBox;
