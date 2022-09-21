import React from 'react'

const NavigationDots = ({ active }) => {
  console.log('testando! ' + active);
  return (
    <div className="app__navigation">
      {['inicio', 'sobre', 'trabalho', 'skills', 'testemunhos', 'contato'].map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a 
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? {backgroundColor: '#D90404'} : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots;