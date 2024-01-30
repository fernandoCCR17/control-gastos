import Gasto from "./Gasto"

const ListadoGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtro,
  gastosFiltrado
}) => {
  return (
    <div className="listado-gastos contenedor">

        {filtro ? ( 
          <>
            <h2>{gastosFiltrado.length ? "Gastos" : "No Hay Gastos En Esta Categoría"}</h2>

            {  
              gastosFiltrado.map(gastoFiltrado => (
                <Gasto 
                    key={gastoFiltrado.id}
                    gasto = {gastoFiltrado}
                    setGastoEditar = {gastoFiltrado}
                    eliminarGasto = {gastoFiltrado}
                />
              ))
            }
          </>
        ) : (
          <>
            <h2>{gastos.length ? "Gastos" : "No Hay Gastos Aún"}</h2>
            
            {
              gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto = {gasto}
                    setGastoEditar = {setGastoEditar}
                    eliminarGasto = {eliminarGasto}
                />
              ))
            }
          </>
        )
          
        }

    </div>
  )
}

export default ListadoGastos