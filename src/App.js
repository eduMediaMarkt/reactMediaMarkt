import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { useEffect, useRef, useState } from 'react';


//PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

//Button PrimeReact
import{Button} from 'primereact/button';
import { InputText } from 'primereact/inputtext';

//MultiSelect PrimeReact
import { MultiSelect } from 'primereact/multiselect';

//TreeSelect PrimeReact
import { TreeSelect } from 'primereact/treeselect';

//DataTable PrimeReact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { render } from '@testing-library/react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { Dropdown } from 'primereact/dropdown';

function App() {
  const baseUrl = "https://localhost:5001/api/producto";
  const[data, setData] = useState([]);
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalInformacion, setModalInformacion]=useState(false);

  const[productoAInsertar, setproductoAInsertar]=useState({    
    nombre: '',
    descripcion: '',
    precio: '',
    familia_Producto: ''
  })

  const handleChanged=(e)=>{
    const {name, value}=e.target;
    setproductoAInsertar({
      ...productoAInsertar,
      [name]: value
    });
    console.log(productoAInsertar);
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  //Inicio modal de información de producto
  const[gestorFilaSeleccionada, setGestorFilaSeleccionada]=useState({
    'id': {value: null},
    'nombre': {value: null},
    'descripcion': {value: null},
    'precio': {value: null},
    'familia_Producto': {value: null}
  })
  const abrirCerrarModalInformacion=(e)=>{    
    setModalInformacion(!modalInformacion);
  }
  const onFilaSeleccionada = (e) => {    
    
    const value = e.value;
    
    let _gestorFilaSeleccionada = { ...gestorFilaSeleccionada };
    
    _gestorFilaSeleccionada['id'].value = e.id;
    _gestorFilaSeleccionada['nombre'].value = e.nombre;
    _gestorFilaSeleccionada['descripcion'].value = e.descripcion;
    _gestorFilaSeleccionada['precio'].value = e.precio;
    _gestorFilaSeleccionada['familia_Producto'].value = e.familia_Producto;    
    
    setGestorFilaSeleccionada(_gestorFilaSeleccionada);
    //setGlobalFilterValue2(value);
    setModalInformacion(!modalInformacion);
  }
  //Fin modal de información de producto


  //Consulta
  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  //Inserción
  const peticionPost=async()=>{
    //delete productoAInsertar.id;
    productoAInsertar.precio = parseFloat(productoAInsertar.precio);    
    //productoAInsertar.id = parseInt(productoAInsertar.id);    
    await axios.post(baseUrl, productoAInsertar)    
    .then(response=>{      
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(() => {
    peticionGet();
  }, [])
 
  
  //Hooks para saber la cantidad de veces qeu se ha dado click a los botónes
  const [count, setCount] = useState(0) 

  //Para filtrado de búsqueda
  const [filters2, setFilters2] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'id': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'nombre': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'descripcion': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'precio': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'familia_Producto': { value: null, matchMode: FilterMatchMode.CONTAINS }        
  });
  const [globalFilterValue2, setGlobalFilterValue2] = useState('');

  const onGlobalFilterChange2 = (e) => {
    const value = e.target.value;
    let _filters2 = { ...filters2 };
    _filters2['global'].value = value;

    setFilters2(_filters2);
    setGlobalFilterValue2(value);
  }

  //Para seleccionar la familia_Product 

  const familyProducts =[
    {name:'Smartphones', value: 'Smartphones'},
    {name:'TV', value: 'TV'},
    {name:'Portátiles', value: 'Portátiles'} 
  ];
  
  const [selectedFamilyProduct, setSelectedFamilyProduct] = useState(null);
  const onfamilyChange = (e) => {
    setSelectedFamilyProduct(e.value);
  }    

  const renderHeader2 = () => {
    return (      
        <div className="flex justify-content-end">  
        
        <a id='aSearchTitle'>Búsqueda por nombre o descripción  </a>
        &nbsp;&nbsp;&nbsp;
            <span className="p-input-icon-left" id='spanSearch'>            
                <i className="pi pi-search" />                
                <InputText value={globalFilterValue2} onChange={onGlobalFilterChange2} placeholder="Keyword Search" />
            </span>
        </div>
    )
  }

  const verifiedRowFilterTemplate = (options) => {
    return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />
  }

const header2 = renderHeader2();

  return (
    <div className="App">

    <div>
      <p>Hooks</p>
      <p>Has hecho click a botones {count} veces</p>
      { /* actualizamos el state al hacer click con setCount */ }      
    </div>
    
      <Button  className="p-button-rounded p-button-info" onClick={()=>{abrirCerrarModalInsertar(); setCount(count+1)}}>Insertar Nuevo Producto</Button>
      <br/><br/>

      <div className='card'>
      <DataTable value={data} responsiveLayout='scroll' selectionMode='single' 
      onSelectionChange={e=>onFilaSeleccionada(e.value)} filters={filters2} //e=>setGestorSeleccionadoInformacion(e.value)
      globalFilterFields={['nombre', 'descripcion']} header={header2} emptyMessage="No customers found.">                    
            <Column field='id' header='ID'></Column>
            <Column field='nombre' header='Nombre'></Column>
            <Column field='descripcion' header='Descripción'></Column>
            <Column field='precio' header='Precio'></Column>
            <Column field='familia_Producto' header='Familia Producto'></Column>                                         
      </DataTable>
      </div>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>Insertar Producto</ModalHeader>
        <ModalBody>
          <div className='form-group'> 
            {/* <label>ID:</label>
            <br />
            <InputText type="text" className='form-control' name='id' onChange={handleChanged} />
            <br /> */}           
            <label>Nombre: </label>
            <br />
            <InputText type="text" className='form-control' name='nombre' onChange={e=>{handleChanged(e)}} />
            <br />
            <label>Descripción: </label>
            <br />
            <InputText type="text" className='form-control' name='descripcion' onChange={e=>{handleChanged(e)}}/>
            <br />
            <label>Precio: </label>
            <br />
            <InputText type="text" className='form-control' name='precio' onChange={e=>{handleChanged(e)}}/>
            <br />
            <label>Familia de producto: </label>
            <br />
            
            <Dropdown value={selectedFamilyProduct} options={familyProducts} name='familia_Producto' 
            onChange={e=>{onfamilyChange(e);handleChanged(e)}} onSelectionChange={e=>{handleChanged(e)}} optionLabel="name" 
                placeholder="Select Family" appendTo={"self"} type="text" className='form-control' />
 
            {/* <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} placeholder="Select Item"></TreeSelect>*/}
            {/* <MultiSelect appendTo={"self"} placeholder='Select Family' optionLabel="label" 
                optionValue="name" options={familyProductSelectItems} onChange={handleChanged} />{/*value={familyProducts}, (e) => setFamilyProducts(e.value) */}
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary' onClick={()=>{peticionPost();setCount(count+1)}}>Insertar</button>{"  "}
          <button className='btn btn-danger' onClick={()=>{abrirCerrarModalInsertar(); setCount(count+1)}}>Cancelar</button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalInformacion} data={gestorFilaSeleccionada}>{/*data={}*/}
        <ModalHeader>Informacion Producto</ModalHeader>
        <ModalBody>
          <div className='form-group'> 
            <label>ID: {gestorFilaSeleccionada.id.value} </label>
            <br />
            
            <br />           
            <label>Nombre: {gestorFilaSeleccionada.nombre.value}</label>
            <br />
            
            <br />
            <label>Descripción: {gestorFilaSeleccionada.descripcion.value}</label>
            <br />
            
            <br />
            <label>Precio: {gestorFilaSeleccionada.precio.value}</label>
            <br />
            
            <br />
            <label>Familia de producto: {gestorFilaSeleccionada.familia_Producto.value}</label>
            <br />
            
            <br />
          </div>
        </ModalBody>
        <ModalFooter>          
          <button className='btn btn-danger' onClick={()=>{abrirCerrarModalInformacion(); setCount(count+1)}}>Cerrar</button>
        </ModalFooter>
      </Modal>

    </div>
  )
  
}

export default App;
