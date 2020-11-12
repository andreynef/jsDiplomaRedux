export const getCodeFromUrl = () => {
    return window.location.search.split("code=")[1];// Считываем код из URL
}

