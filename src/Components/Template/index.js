
import {SMain} from './style'
import Menu from '../Menu'

export default function Template(props){
  return(
    <SMain>
      <Menu/>
      {props.children}
    </SMain>
  )
}
