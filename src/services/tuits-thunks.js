import {createAsyncThunk}
    from "@reduxjs/toolkit";
import * as service
    from "./tuits-service";

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits',
    async (thunkAPI) =>
        await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (id) =>
        await service.deleteTuit(id)
);

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuitText) =>
        await service.createTuit(tuitText)
);

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

