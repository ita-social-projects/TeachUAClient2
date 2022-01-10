export const tokenToHeader = () => {
    const token = localStorage.getItem("accessToken");
    return "Bearer " + token;
}