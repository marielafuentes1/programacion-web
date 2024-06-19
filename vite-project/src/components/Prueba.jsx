
export function Prueba({nombre, apellido}) {
    const products = [
        { title: 'Col', id: 1 },
        { title: 'Ajo', id: 2 },
        { title: 'Manzana', id: 3 },
    ];
    return(
    <>   
        <h1>
            Hola {nombre} {apellido} 
        </h1>
    {
        products.map((item) => (
            <>{item.title}</>
        )
        )
    }
    
    </>
    );
}