import './ToolCard.sass';

type ToolCardProps = {
    name: string;
    icon: string;
}

const ToolCard = ({ name, icon }: ToolCardProps) => {
    return (
        <div className='tool-card'>
            <div className='tool-icon'>{icon}</div>
            <div className='tool-name'>{name}</div>
        </div>
    );
}

export default ToolCard;