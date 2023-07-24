
import { ThemeName } from '../App'
interface Props {
    selectedCheckbox: ThemeName
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function Inputs({selectedCheckbox,handleCheckboxChange}:Props) {
  return (
    <div>
    <div className='inputs'>
  <input
    id='theme1'
    type='checkbox'
    checked={selectedCheckbox === 'theme1'}
    onChange={handleCheckboxChange}
  />
  <label htmlFor='theme1'>1</label>

  <input
    id='theme2'
    type='checkbox'
    checked={selectedCheckbox === 'theme2'}
    onChange={handleCheckboxChange}
  />
  <label htmlFor='theme2'>2</label>

  <input
    id='theme3'
    type='checkbox'
    checked={selectedCheckbox === 'theme3'}
    onChange={handleCheckboxChange}
  />
  <label htmlFor='theme3'>3</label>
</div>
    </div>
  )
}

export default Inputs