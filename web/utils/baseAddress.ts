const baseAddress = process.env.NODE_ENV == "production" 
    ? 'https://playground-betaoverflow-2.herokuapp.com' 
    : 'http://localhost:8080';
    
export default baseAddress
