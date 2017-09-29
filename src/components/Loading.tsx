import * as React from 'react';
import './Loading.scss';

interface LoadingBar {
  (props: {
    error: boolean,
    hidden: boolean,
    success: boolean,
  }): JSX.Element;
}

export const LoadingBar: LoadingBar = ({ error, hidden, success }) => (
  <div className={`LoadingBar${error ? ' --error' : ''}${hidden ? ' --hidden' : ''}${success ? ' --success' : ''}`}>
    <div className="LoadingBar-Bar" />
  </div>
);

interface LoadingIcon {
  (props: {
    error: boolean,
    hidden: boolean,
    success: boolean,
    background: boolean,
  }): JSX.Element;
}

export const LoadingIcon: LoadingIcon = ({ error, background, hidden, success }) => (
  <div className={`LoadingIcon ${error ? '--error' : ''} ${background ? '--background' : ''}${hidden ? ' --hidden' : ''}${success ? ' --success' : ''}`}>
    <div className="LoadingIcon-Icon" />
  </div>
);