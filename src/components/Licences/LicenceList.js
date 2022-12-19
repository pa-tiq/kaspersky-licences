import LicenceItem from "./LicenceItem";
import "./LicenceList.css";

const LicenceList = (props) => {

  if (props.licences.length === 0){
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  let qtdTotal = 0;

  let expensesContent = 
    props.licences.map((item) => {
        qtdTotal += item['qtd licencas'];
        return (<LicenceItem
          key={item.OM}
          title={item.OM === 'Managed devices' ? 'Servidor' : (item.OM === '4CTA-2' ? '4CTA' : item.OM)}
          qtd={item['qtd licencas']}
        />);
      });

  return (
    <ul className="expenses-list">
      <LicenceItem 
        key={'Qtd Total'}
        title={'Qtd Total'}
        qtd={qtdTotal}
      />      
      <LicenceItem 
        key={'Porcentagem'}
        title={'Porcentagem do total de 3000'}
        qtd={parseFloat((qtdTotal / 3000) * 100).toFixed(2)}
      />
      {expensesContent}
    </ul>
  )
}

export default LicenceList;