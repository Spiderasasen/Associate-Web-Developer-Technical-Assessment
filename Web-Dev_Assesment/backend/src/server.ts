import app from "./app"

//calling the api
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})