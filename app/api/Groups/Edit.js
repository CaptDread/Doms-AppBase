"use client"





// "use client"
// import { Storage } from '@ionic/storage';
// import { useEffect, useState } from 'react';

// const storage = new Storage();

// const [value, setValue] = useState('');

// const initStorage = (key, initialValue) => {
//     setValue(initialValue)

//     useEffect(() => {
//         const initStorage = async () => {
//             await storage.create();
//             const storedValue = await storage.get(key);
//             if(storedValue !== null) {
//                 setValue(storedValue);
//             }
//         };
//         initStorage();
//     },[key, storage])

//     const setStoredValue = async (newValue) => {
//         await storage.set(key, newValue);
//         setValue(newValue);
//     };

//     return[value, setStoredValue];
// }

// const saveData = async (key, value) => {
//     try {
//         await storage.set(key, value);
//         console.log('Data saved successfully:', key, value);
//     } catch (error) {
//         console.error('Error saving data:', error);
//     }
// };

// const fetchDataAndSave = async () => {
//     try {
//         const response = await fetch('your-api-endpoint');
//         const data = await response.json();

//         await saveData('apiData', data);
//     } catch (error) {
//         console.error('Error fetching or saving data:', error);
//     }
// };

// const getData = async (key) => {
//     try {
//       const data = await storage.get(key);
//       console.log('Retrieved data:', key, data);
//       return data;
//     } catch (error) {
//       console.error('Error retrieving data:', error);
//     }
// };

// export default initStorage
