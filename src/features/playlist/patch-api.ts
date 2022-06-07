import { createAsyncThunk } from "@reduxjs/toolkit";
import apiPlayList from "../../apis/api-playlist";

export const getPlaylist = createAsyncThunk("list-music/get-list", async (params: any) => {
    const response = await apiPlayList.getPlaylist(params);
    return response;
});
export const createPlaylist = createAsyncThunk("list-music/create", async (params: any) => {
    const response = await apiPlayList.createPlaylist(params);
    return response;
});

export const getByIdPlaylist = createAsyncThunk("list-music/get-by-id", async (params: any) => {
    const response = await apiPlayList.getByIdPlaylist(params);
    return response;
});

export const addListMusic = createAsyncThunk("list-music/add-music", async (data: any) => {
    const response = await apiPlayList.addListMusic(data);
    return response;
});