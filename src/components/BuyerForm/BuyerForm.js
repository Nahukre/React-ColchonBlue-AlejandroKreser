
export const BuyerForm = (setBuyer, buyer, nombre, telefono, email) => {
    const handleBuyerChange = (e) => {
        setBuyer({...buyer, [e.target.nombre]: e.target.value  })
    }

    return (
        <div>
            <p>
                <input type="text" value={nombre} onChange= {handleBuyerChange} required/>
            </p>
            {/* <p>
                <label for="Celular">Celular:</label>
                <input type="tel" className="telefono" value={telefono} placeholder="1155562439" required />
            </p>
            <p>
                <label for="email">Email:</label>
                <input type="email" value={email} placeholder="nombre@ejemplo.com" required/>
            </p> */}
        </div>
    );
}

export default BuyerForm