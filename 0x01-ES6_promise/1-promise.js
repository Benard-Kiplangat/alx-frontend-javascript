import {uploadPhoto, createUser} from "./utils.js";

export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (!success) {
            reject("The fake API is not working currently");
        } else {
            resolve({
            status: 200, body: 'Success',
        })
    }
});
};