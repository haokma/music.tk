import axiosClient from "./axios-client"


const apiPlayList = {
    getPlaylist: (params: any) => {
        const url = "list-music/get-list";
        return axiosClient.get(url, {params})
    },
    createPlaylist: (data: any): Promise<any> => {
        const url = "list-music/create";
        return axiosClient.post(url, data);
    },
    getByIdPlaylist(params: any): Promise<any> {
        const url = `list-music/get-by-id?_id=${params._id}`;
        return axiosClient.get(url);
    },
    addListMusic(params: any): Promise<any> {
        const url = "list-music/add-list-music";
        return axiosClient.put(url, params);
    },
}

export default apiPlayList