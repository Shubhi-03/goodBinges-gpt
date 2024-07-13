// import OpenAI from 'openai';
// import { OPEN_AI_key } from './constants';

// // Instantiate OpenAI client with API key
// const openai = new OpenAI({ 
//   apiKey: OPEN_AI_key ,
//   dangerouslyAllowBrowser: true,

//  });


// export default openai;

import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPEN_AI_key } from "./constants";

      // Fetch your API_KEY
      const API_KEY = OPEN_AI_key;

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(OPEN_AI_key);

      // ...

      const model = genAI.getGenerativeModel({ model: "gemini-pro"});