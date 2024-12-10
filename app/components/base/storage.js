"use client"
import { useState, useEffect } from 'react';
import React from "react";
import { Storage, Drivers } from "@ionic/storage";
import CordovaSQLiteDriver from "localforage-cordovasqlitedriver";
import localForage from "localforage";




const useStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [storage] = useState(new Storage());

    useEffect(() => {
        const initStorage = async () => {
            await storage.create();
            const storedValue = await storage.get(key);
            if(storedValue !== null) {
                setValue(storedValue);
            }
        };
        initStorage();
    },[key, storage])

    const setStoredValue = async (newValue) => {
        await storage.set(key, newValue);
        setValue(newValue);
    };

    // const SaveData = async (key, value) => {
    //     try {
    //         await storage.set(key, value);
    //         console.log('Data saved successfully:', key, value);
    //         } catch (error) {
    //         console.error('Error saving data:', error);
    //     }
    // }


    return[value, setStoredValue];
};


export default useStorage;

