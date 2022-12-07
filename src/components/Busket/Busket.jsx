import React from 'react'

export const Busket = () => {
    const [busket, setBusket] = React.useState();
const myBusket = JSON.parse(localStorage.getItem('basket'))

    React.useEffect(()=> {
        setBusket(localStorage.getItem('basket'));
    })

    console.log({myBusket})

    return (
        <div>
            <div>Мои товары</div>
            {myBusket?.map((item)=> (
                <div>{item.title}</div>

            )
            )}
        </div>
    )
}

export default Busket