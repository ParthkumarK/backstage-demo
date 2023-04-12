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
  HomePageToolkit,
  HomePageCompanyLogo,
} from '@backstage/plugin-home';
import { Content, Page, InfoCard } from '@backstage/core-components';
import {
  MockStarredEntitiesApi,
} from '@backstage/plugin-catalog-react';
import { HomePageSearchBar } from '@backstage/plugin-search';

import {
  SearchContextProvider,
} from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloudIcon from '@material-ui/icons/Cloud';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';

import { Overview } from './Overview';

const starredEntitiesApi = new MockStarredEntitiesApi();
starredEntitiesApi.toggleStarred('component:default/example-starred-entity');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-2');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-3');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-4');

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '50px',
    margin: 'auto',
  },
}));

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
}));

const links = [
  {
    url: '#',
    label: 'Github',
    icon: <GitHubIcon />,
  },
  {
    url: '#',
    label: 'Cloud',
    icon: <CloudIcon />,
  },
  {
    url: '#',
    label: 'Mail',
    icon: <MailIcon />,
  },
  {
    url: '#',
    label: 'Linkedin',
    icon: <LinkedInIcon />,
  },
  {
    url: '#',
    label: 'Twitter',
    icon: <TwitterIcon />,
  },
  {
    url: '#',
    label: 'Facebook',
    icon: <FacebookIcon />,
  },
]
  
export const HomePage = () => {
  const classes = useStyles();
  const { container } = useLogoStyles();
  
  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo
              className={container}
              logo={<img src={'https://www.gozego.com/wp-content/themes/kps3-pl/public/assets/images/logo.svg?ver=1.2'} ></img>}
            />
            <Grid container item xs={5} md={12} alignItems="center" justifyContent='center' direction="row">
              <HomePageSearchBar
                classes={{ root: classes.searchBar }}
                placeholder="Search"
              />
            </Grid>
          
            <Grid item xs={12} md={10}>
                <InfoCard title="Overview">
                  <div style={{ height: 300 }}>
                  <Overview />
                  </div>
                </InfoCard>
              </Grid>
            <Grid container item xs={12} md={10}>
              <Grid item xs={12} md={12}>
                <HomePageToolkit
                title='Social Links'
                  tools={links}
                />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};