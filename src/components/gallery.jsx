import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>

      <div className='overlay'>
        <div className='gallery-back'>
          <div className='row'>
            <div className='col-md-2 col-md-offset-5 text-center'>
              <img src="img/vswap/logo.png" alt="" className="gallery-logo" />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}
