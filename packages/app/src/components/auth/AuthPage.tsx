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

import { Content, Page, SignInPage } from '@backstage/core-components';
import {
  MockStarredEntitiesApi,
} from '@backstage/plugin-catalog-react';

import { googleAuthApiRef, githubAuthApiRef, discoveryApiRef, useApi, IdentityApi } from '@backstage/core-plugin-api';

import { Grid } from '@material-ui/core';
import React from 'react';


// Parses supplied JWT token and returns the payload
function parseJwt(token: string): { exp: number } {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(
        c =>
          // eslint-disable-next-line prefer-template
          '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2),
      )
      .join(''),
  );

  return JSON.parse(jsonPayload);
}

// Returns milliseconds until the supplied JWT token expires
function msUntilExpiry(token: string): number {
  const payload = parseJwt(token);
  const remaining =
    new Date(payload.exp * 1000).getTime() - new Date().getTime();
  return remaining;
}

async function setTokenCookie(url: string, identityApi: IdentityApi) {
  const { token } = await identityApi.getCredentials();
  if (!token) {
    return;
  }

  await fetch(url, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Call this function again a few minutes before the token expires
  const ms = msUntilExpiry(token) - 4 * 60 * 1000;
  setTimeout(
    () => {
      setTokenCookie(url, identityApi);
    },
    ms > 0 ? ms : 10000,
  );
}

export const AuthPage = () => {
  const discoveryApi = useApi(discoveryApiRef);
  return (
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            
          <SignInPage
            // {...props}
            auto={true}
            providers={[
              {
                id: 'google-auth-provider',
                title: 'Google',
                message: 'Sign In using Google',
                apiRef: googleAuthApiRef,
              },
              {
                id: 'github-auth-provider',
                title: 'GitHub',
                message: 'Sign in using GitHub',
                apiRef: githubAuthApiRef,
              }
            ]}
            title='SignIn'
            onSignInSuccess={async (identityApi: IdentityApi) => {
              setTokenCookie(
                await discoveryApi.getBaseUrl('cookie'),
                identityApi,
              );
            }}
          />
          </Grid>
        </Content>
      </Page>
  );
};