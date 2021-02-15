import changeContent from './app/Content';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    changeContent();
  }
};
