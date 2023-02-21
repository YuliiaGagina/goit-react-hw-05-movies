import {RotatingLines } from 'react-loader-spinner'

export const Loader = () =>{
    return(
        <div style={{ position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',}}>
            <RotatingLines style={{  position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',}}
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>

        </div>
    )
}