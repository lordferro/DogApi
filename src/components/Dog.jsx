export const Dog = ({ dog:{name, bred_for, image} }) => {
    return (
      <div>
        <img src={image.url} alt="dog" width="480" />
        <p>Name: {name}</p>
            <p>Breed: { bred_for}</p>
      </div>
    );
}