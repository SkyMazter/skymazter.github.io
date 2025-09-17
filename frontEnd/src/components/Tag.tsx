interface Props{
    text: string
}
const Tag = ({text}: Props) => {
  return (
    <span className="tag small">{text}</span>
  )
}

export default Tag