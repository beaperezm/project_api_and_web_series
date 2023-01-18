
function setLocal(key, value) {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
}

function getLocal(key, defaultValue) {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
        return defaultValue;
      } else {
        return JSON.parse(localStorageData);
      }
}

export {setLocal, getLocal};

