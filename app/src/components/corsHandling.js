import React, { useState } from 'react';

const corsApp = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('https://api.example.com/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // Other headers if needed
      }
    })
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        {data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default corsApp;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class CorsConfig implements WebMvcConfigurer {

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**")
//             .allowedOrigins("*") // Allow requests from any origin
//             .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed HTTP methods
//             .allowedHeaders("*"); // Allowed headers
//     }
// }
