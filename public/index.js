import changeContent from './app/Content.js';
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        changeContent();
    }
};
//# sourceMappingURL=index.js.map