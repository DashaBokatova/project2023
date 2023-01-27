import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons =[
        {
            id:1, name:'Homer', surname:'Simpson', image:'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            id:2, name:'Marge', surname: 'Simpson', image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        }
    ]
    return (
        <div>
            {
                simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};