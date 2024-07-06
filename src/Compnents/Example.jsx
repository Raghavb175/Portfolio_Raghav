import { TypeAnimation } from 'react-type-animation';
import './button.css'
export const Example = () => {
  return (
    <>
      <div className='h-[75vh] bg-purple-400 flex justify-around items-center'>
        <div className='bg-purple-400 upper-left w-[50vw] font-bold text-xl'>
          <TypeAnimation
            sequence={[
              // Use '\n' to specify line breaks in the text
              'Hello I am\nRaghav',
              2000,
              'Hello I am\na Fullstack developer',
              2000,
              'Hello I am\na Recent Graduate',
              2000,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: '2em', display: 'inline-block', lineHeight: '1.3', whiteSpace: 'pre-wrap' }}
            repeat={Infinity}
          />
        </div>
        <div>
          <img src='./src/assets/imagemy.png' alt='My Image' />
        </div>
        <div><button></button></div>
      </div>
    </>
  );
};
