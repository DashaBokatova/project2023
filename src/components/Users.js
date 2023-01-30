const Users = ({users}) => {

    return (
        <div>
            {users.map((item, index) => {
                const {id: userId, name} = item ;
                return (
                    <div key={'${userId}-item'}>
                        {userId} --- {name}

                    </div>
                )
            })}

        </div>
    );
};

export {Users};