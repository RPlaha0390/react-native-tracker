import Axios from 'axios';

export interface AuthParams {
  email: string;
  password: string;
}

const client = Axios.create({
  baseURL: 'https://g4say3prtd.execute-api.us-east-1.amazonaws.com/dev'
});

// const createSignUp = async ({
//   email,
//   password
// }: CreateSignUpParams): Promise<{}> => {
//   const response = await client.post('/sign-up');

//   return response;
// };

export default {
  client
};
