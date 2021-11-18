
import {SContent, SService, SCheckbox, SButton, SLink} from './style'
import Template from '../Template'
import { useEffect, useState } from "react";
import API from "../../services/api"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Service({data}) {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const notify = msg => toast(msg, {hideProgressBar: true, position: "bottom-left"});
  
  const handleChange = event => {
    const serialServices = [...services]
    serialServices[event.target.id].checked = event.target.checked
    setServices(serialServices)
  }

  useEffect(() => {
    (async function fetch() { 
      setLoading(true)
      try{
        const allServices = await new API().getServices()
        const serialServices = allServices.map((service) => ({
          ...service,
          checked: false,
      }));
        const resp = await new API().getUserData()
        if(sessionStorage.getItem('services')){
          let intersection = serialServices.map(item => sessionStorage.getItem('services').includes(item.id));  
          serialServices.forEach((item, index) => item.checked = intersection[index]);
          setServices(serialServices)
        }else{
          const selected = resp.services.map(service =>  service.id)
          let intersection = serialServices.map(item => selected.includes(item.id));  
          serialServices.forEach((item, index) => item.checked = intersection[index]);
          setServices(serialServices)
        }
      }catch(err){
        console.log(err)
      }
      setLoading(false)
    })();
  }, []);
  
  const handleFormService = async event => {
    event.preventDefault()
    setLoading(true)
    const selected = services.filter(item => item.checked).map(i => i.id)
    try {
      await new API().setServices(data.user.id, selected)
      sessionStorage.setItem('services', selected)
      notify("Salvo com sucesso")
      setTimeout(()=>{ navigate("/")}, 1500);
      
    }catch(err){
      console.log(err)
      notify("Não foi possívesl atualizar")
    }
    setLoading(false)
  } 

  const total = () => {
    const selected = services.filter(item => item.checked).map(i => i.price)
    const total = selected.reduce((acumulador, atual) => { return acumulador + atual}, 0) //valor inicial
    return total
  } 

  const checkboxes = services;

  return(
    <Template noMenu>
      <SContent>
        {!loading ? 
        <SService>
          <h1>Serviços Contratados</h1>
          <ToastContainer />
          <form>      
           {checkboxes.map((item, index) => (
             <SCheckbox for={index} key={index} className="checkbox service__checkbox"> 
               <input type="checkbox" id={index} name={item.id} checked={services[index].checked} onChange={handleChange}/>
               <span className="service__checkbox-text">{item.name} <span className="service__checkbox-price">R${item.price}</span></span>
               <div class="service__checkbox-icon"></div>
              </SCheckbox>
           ))}
            <div className="form__footer">
              Total Selecionado: 
              <span className="form__footer-total">R${total()}</span>
            </ div>
            <div className="form__buttons">
              <Link to='/'><SLink>Cancelar</SLink></Link>
              <SButton onClick={handleFormService}> Salvar</SButton>
            </div>
          </ form>
        </SService>
        :
        <p>Carregando</p>
        }
      </SContent>
    </Template>
  )

}
