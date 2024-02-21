async function getData() {
    try {
        // undefined.find();

        const emailError = new Error("email is required");
        throw emailError;
    }
    catch (e) {
       errorHandler(e);
    }
}

getData();

function errorHandler(e) {
    const {name, message, stack} = e;
    
    // logger.error({name, message, stack});

    console.log(message)
}
console.log("done")