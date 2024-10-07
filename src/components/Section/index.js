export default function Section({ children }) {
  return (
    <div className="px-[20px] tablet:px-[30px] desktop:px-[60px]">
      {children}
    </div>
  );
}
