import MainModel from '../models/main.model';

/** @type {import('express').RequestHandler} */
const getAll = async (req, res) => {
    const data = await MainModel.getAll();
    res.json(data);
};

const mainController = {
    getAll,
};

export default mainController;
