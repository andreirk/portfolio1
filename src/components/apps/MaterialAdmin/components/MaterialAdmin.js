import React, {Component} from 'react';
import { simpleRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';



class MaterialAdmin extends Component {
  render() {
    return (
      <Admin restClient={simpleRestClient('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      </Admin>
    );
  }
}

export default MaterialAdmin;
