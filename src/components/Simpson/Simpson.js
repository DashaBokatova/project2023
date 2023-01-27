const Simpson = ({simpson}) => {
    const {name, surname, image} = simpson;
    return (
        <div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <img src={image}/>
        </div>
    );
};

export {Simpson};