export default function Section({ children, className }) {
  return <div className={`${className} tablet:px-[30px] desktop:px-[60px]`}>{children}</div>;
}
