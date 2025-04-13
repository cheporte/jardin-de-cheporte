import './GardenCard.sass';

type GardenCardProps = {
    name: string
    description: string
    icon?: string
  }

const GardenCard = ({ name, description, icon }: GardenCardProps) => {
    return (
        <div className="garden-card">
            {icon && <div className="garden-icon">{icon}</div>}
            <h3 className="garden-name">{name}</h3>
            <p className="garden-description">{description}</p>
        </div>
    );
}

export default GardenCard;