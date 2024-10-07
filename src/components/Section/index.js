export default function Section({ children, className }) {
  return <div className={`px-[20px] tablet:px-[30px] desktop:px-[60px] ${className ?? ""}`}>{children}</div>;
}
