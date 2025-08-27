import React from "react";

export  const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
    return await response.json();
}

export const weatherApi = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9b16a38227ede56519992f65ba71a288`, {
        method: "GET",
    });
        return await response.json();
}


