/*
2 * Copyright 2021 The Backstage Authors
3 *
4 * Licensed under the Apache License, Version 2.0 (the "License");
5 * you may not use this file except in compliance with the License.
6 * You may obtain a copy of the License at
7 *
8 *     http://www.apache.org/licenses/LICENSE-2.0
9 *
10 * Unless required by applicable law or agreed to in writing, software
11 * distributed under the License is distributed on an "AS IS" BASIS,
12 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
13 * See the License for the specific language governing permissions and
14 * limitations under the License.
15 */

import {
  MockStarredEntitiesApi,
} from '@backstage/plugin-catalog-react';
import React from 'react';


const starredEntitiesApi = new MockStarredEntitiesApi();
starredEntitiesApi.toggleStarred('component:default/example-starred-entity');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-2');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-3');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-4');

  
export const Overview = () => {
  
  return (
    <div className="Box-body p-4">
    <h1>Wellcome To the backstage</h1>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed excepturi nisi eveniet exercitationem optio a, voluptas voluptates voluptatum quasi laudantium veritatis enim libero asperiores illo magnam odit nesciunt necessitatibus illum consequuntur incidunt aperiam qui. Veniam, eveniet. Veniam modi, nihil accusantium debitis doloribus facere, cupiditate tempora officia repellat maxime, blanditiis sunt aperiam laborum asperiores deserunt. Aliquid, quae? Ipsam illo et ea. Impedit delectus, eius harum incidunt eligendi suscipit. Iure repudiandae aut cupiditate mollitia officiis magnam veniam porro? Alias inventore itaque earum? Possimus explicabo eaque, dolorum totam ab, sunt magni quisquam consequatur adipisci, animi atque molestiae cupiditate pariatur voluptatibus impedit magnam saepe.</h3>
    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quasi, repellat tempore eaque consequatur architecto. Deleniti eveniet minus facere recusandae porro non sit, commodi perferendis ipsum cumque dicta corporis enim.</h3>
    {/* <ul>
      <li><h3>Google Authenitcation</h3></li>
      <li><h3>Github Authenitcation</h3></li>
      <li><h3>Octa Authenitcation</h3></li>
    </ul> */}

    {/* <h1> =) Upcomming features:)</h1>
    <ul>
      <li><h3>Microsoft Authentication</h3></li>
      <li><h3>Facebook Authentication</h3></li>
      <li><h3>Gitlab Authentication</h3></li>
      <li><h3>Aws Authentication</h3></li>
      <li><h3>Bitbucket Authentication</h3></li>
    </ul> */}
  </div>
  );
};