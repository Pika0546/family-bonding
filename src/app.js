import express from 'express';
import { router } from './route';


const port = 3000;
const app = express();

router(app);

app.listen(process.env.PORT || port, () => {
	console.log(`Example app listening at http://localhost:${process.env.PORT || port}`);
})

