import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Intensiv utbildning',
          imageUrl: 'https://avatars.yandex.net/get-music-content/3071110/2bc41d0f.a.12250902-1/m1000x1000?webp=false',
          id: 1,
          linkurl: ''
        },
        {
          title: 'Test lektion',
          imageUrl: 'https://i.pinimg.com/736x/70/e8/1a/70e81a7a09e5ec4b0240dd661591c8c3.jpg',
          id: 2,
          linkurl: ''

        },
        {
          title: 'INTENSIVKURS',
          imageUrl: 'https://sun9-30.userapi.com/c850608/v850608525/149f63/FBSTMqGTC1M.jpg',
          id: 3,
          linkurl: ''

        },
        {
          title: 'Mopedutbildning',
          imageUrl: 'https://sun9-70.userapi.com/81IU6mUID1xoix2nunm7tPgi1HU3VaInvsGniw/AjSkyC1mZ3g.jpg',
          size: 'large',
          id: 4,
          linkurl: 'Moped'

        },
        {
          title: 'HANDLEDARUTBILDNING',
          imageUrl: 'https://sun9-45.userapi.com/impf/6q1HjsJEhGfeOhUj7IVPW5FtJEsBeYbwL_dcPg/DVAV140kyLY.jpg?size=604x385&quality=90&sign=240845adc5f8406c92bdd32f04d2ee66',
          size: 'large',
          id: 5,
          linkurl: ''

        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
