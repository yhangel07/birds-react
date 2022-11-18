import { Request, Response } from 'express';
import { successMessage, errorMessage, status } from '../helper/status';
import fs from 'fs';

const getListOfBirds = async (req: Request, res: Response) => {
    try {
        const birdRaw = fs.readFileSync('bird.json');
        const birdJson = JSON.parse(birdRaw.toString());

        successMessage.data = birdJson;
        return res.status(status.success).send(successMessage);
    } catch (error) {
        errorMessage.error = 'ERROR: ' + error;
        return res.status(status.error).send(errorMessage);
    }
}

const getBirdDetails = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const birdRaw = fs.readFileSync('bird.json');
        const birdJson = JSON.parse(birdRaw.toString());

        if(birdJson && birdJson.birds.length != 0) {
            successMessage.data = birdJson.birds[parseInt(id) - 1];
            return res.status(status.success).send(successMessage);
        } else {
            throw "Bird Id not found"
        }

        
    } catch (error) {
        errorMessage.error = 'ERROR: ' + error;
        return res.status(status.error).send(errorMessage);
    }
}

export {
    getListOfBirds,
    getBirdDetails
}