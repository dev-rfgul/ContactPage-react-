import {MdMessage} from 'react-icons/md'

const Button = (props) => {
  console.log(props)
  return (
    <>
    <button className='btnPrimary container'>
      {props.text}
      {props.icon }
    </button>
    
    </>
  )
}

export default Button
