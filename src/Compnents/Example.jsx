import { TypeAnimation } from 'react-type-animation';

export const Example = () => {
  return (
    <>
      <div className='h-[65vh] flex justify-around items-center border-y-2'>
        <div className=' upper-left w-[50vw] font-bold text-xl text-purple-500'>
          <TypeAnimation
            sequence={[
              'Hello I am\nRaghav',
              2000,
              'Hello I am\na Fullstack developer',
              2000,
              'Hello I am\na Recent Graduate',
              2000,
            ]}
            wrapper="span"
            speed={10}
            style={{fontSize: '2em', display: 'inline-block', lineHeight: '1.3', whiteSpace: 'pre-wrap' }}
            repeat={Infinity}
          />
        </div>

        <div>
          <img src='./src/assets/imagemy.png' alt='My Image' />
        </div>
      </div>
    </>
  );
};
