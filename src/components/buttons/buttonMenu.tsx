import { useScrollReveal } from "@/hooks/useScrollReveal";
import IButtonMenu from "@/ui/interfaces/IButtonMenu";
const ButtonMenu: React.FC<IButtonMenu> = (props) => {

  useScrollReveal('.buttonAppear', {
    origin: 'left',
    distance: '200%',
    duration: 2000,
    delay: 300,
    interval: 300,
  });
  
  return (
    <div className={`rounded-full bg-gray-500 text-center mt-6 p-3 min-w-full text-shadow hover:bg-gray-800 cursor-pointer hover:shadow-black-500/50 shadow text-white text-lg ${props.appearClass}`}>
        <a href={`#${props.id}`}>{props.title}</a>
    </div>
  );
}

export default ButtonMenu;