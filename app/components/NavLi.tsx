type NavLiProps = {
  children: React.ReactNode;
};

const NavLi = ({ children }: NavLiProps) => {
  return <li className='hover:text-slate-500'>{children}</li>;
};
export default NavLi;
